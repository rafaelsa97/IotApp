const app = require("express")();
const request = require("request");

RotasSimples: {
// "/"    => "Hi there!"
app.get("/",function(req,res)
{
    res.render("home.ejs");
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

request('https://itunes.apple.com/search?term=beatles&entity=song', function (error, response, body) {
  var parsed = JSON.parse(body);
  console.log(parsed["resultCount"]); // Print the HTML for the Google homepage.
});

// Runs the server and makes it listen to port 3000
// app.listen(3000,function(){
//     console.log("Listening on port 3000")
// });