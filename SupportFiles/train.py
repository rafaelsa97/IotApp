from __future__ import print_function

import numpy as np
import requests
import psycopg2
import argparse
import pandas
import boto3
import json
import os
from scipy import spatial
from sklearn.linear_model import LogisticRegression
import joblib

def train(args):
    response = requests.get("<INPE-API-URL>")
    lightningOccurrences = pandas.read_json(response.text)
    # print (lightningOccurrences[['latitude','longitude']])
    PORT=              ""
    DATABASE_USER=     ""
    DATABASE_PASSWORD= ""
    DATABASE_HOST=     ""
    DATABASE_NAME=     ""
    DATABASE_PORT=     ""
    con = psycopg2.connect(host=DATABASE_HOST, database=DATABASE_NAME,user=DATABASE_USER, password=DATABASE_PASSWORD,
                           port=DATABASE_PORT)
    cur = con.cursor()
    sql = 'SELECT "ds_linha_transmissao", "coord_y", "coord_x" FROM "torres_completas" WHERE "coord_y" IS NOT NULL OR "coord_x" IS NOT NULL'
    cur.execute(sql)
    results = cur.fetchall()
    towers = pandas.DataFrame (results,columns=['linha','latitude','longitude'])
    tree = spatial.KDTree(towers[['latitude','longitude']])
    distances = tree.query(lightningOccurrences[['latitude','longitude']])
    distances = pandas.DataFrame(list(distances)).T
    distances.columns = ['distance','towerIndex']
    results = []
    for index, row in distances.iterrows():
        if row['distance'] <= 0.0005 and abs(int(lightningOccurrences[['corrente']].iloc[index])) >= 32.9:
            results.append(1)
        else:
            results.append(0)
    results = pandas.DataFrame(list(results))
    dataset = pandas.DataFrame({
        'distance': distances['distance'],
        'current' : lightningOccurrences['corrente'],
        'results' : results[0]
    })
    dataset.to_csv('train.csv')
    
    bucket = 'pfc-bucket'
    region = 'sa-east-1'
    s3_session = boto3.Session().resource('s3')
    # s3_session.create_bucket(Bucket=bucket, 
    #                          CreateBucketConfiguration=
    #                          {'LocationConstraint': region})
    s3_session.Bucket(bucket).Object('train/train.csv').upload_file('train.csv')
    features = dataset.to_numpy()[:,:2]
    features[:,0] = features[:,0] * 100000
    result = dataset.to_numpy()[:,2]
    reg = LogisticRegression().fit(features,result)
    
    save_model(reg, args.model_dir)
    
    
def save_model(model, model_dir):
    joblib.dump(model, os.path.join(model_dir, "model.joblib"))




def model_fn(model_dir):
    """Deserialized and return fitted model
    
    Note that this should have the same name as the serialized model in the main method
    """
    estimator = joblib.load(os.path.join(model_dir, "model.joblib"))
    return estimator

if __name__ == '__main__':
    parser = argparse.ArgumentParser()

    # Hyperparameters are described here. In this simple example we not including hyperparameters.
    #parser.add_argument('--MY-HYPERPARM-NAME', type=int, default=-1)

    # Sagemaker specific arguments. Defaults are set in the environment variables.
    parser.add_argument('--output-data-dir', type=str, default=os.environ['SM_OUTPUT_DATA_DIR'])
    parser.add_argument('--model-dir', type=str, default=os.environ['SM_MODEL_DIR'])
    parser.add_argument('--train', type=str, default=os.environ['SM_CHANNEL_TRAIN'])

    args = parser.parse_args()
                                                              
    train(args)