const express = require("express");
const app     = express();

RotasSimples: {
// "/"    => "Hi there!"
app.get("/",function(req,res)
{
    res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye",function(req,res)
{
    res.send("Goodbye!")
});

// "/dog" => "MEOW"
app.get("/dog",function(req,res)
{
    res.send("Goodbye!")
});

// params
app.get("/:param",function(req,res)
{
    console.log("Parâmetro = " + req.params.param);
    res.send("Goodbye!")
});
}

RotaDefault: {
    app.get("*",function(req,res)
    {
        res.send("Você chegou a lugar nenhum")
    });
}

// Runs the server and makes it listen to port 3000
app.listen(3000,function(){
    console.log("Listening on port 3000")
});