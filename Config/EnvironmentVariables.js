const dotenv = require('dotenv');
// config() will read your .env file, parse the contents, assign it to process.env.
dotenv.config();

exports.default = {
    port: process.env.PORT,
    database: {
        databaseName: process.env.DATABASE_NAME,
        user        : process.env.DATABASE_USER,
        password    : process.env.DATABASE_PASSWORD
    },
    // Add towersBasicInformation to Heroku environent variables
    towersBasicInformation: "https://sig.taesa.com.br/arcgis/rest/services/geotaesa/PeD_TAESA/FeatureServer/1/query?f=json&returnGeometry=true&spatialRel=esriSpatialRelIntersects&maxAllowableOffset=78271&geometry=%7B%22xmin%22%3A-20037508.342788905%2C%22ymin%22%3A-20037508.342779063%2C%22xmax%22%3A20037508.342779063%2C%22ymax%22%3A20037508.342788905%2C%22spatialReference%22%3A%7B%22wkid%22%3A102100%2C%22latestWkid%22%3A3857%7D%7D&geometryType=esriGeometryEnvelope&inSR=102100&outFields=objectid%2Csg_local%2Cnm_equipamento%2Cds_linha_transmissao%2Ccoord_y%2Ccoord_x%2Cobjectid%2Cds_subtipo_suporte&outSR=102100",
    towersCompleteInformation: "https://sig.taesa.com.br/arcgis/rest/services/geotaesa/PeD_TAESA/FeatureServer/1/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=objectid%20ASC&outSR=102100&resultOffset=0&resultRecordCount=50"
};