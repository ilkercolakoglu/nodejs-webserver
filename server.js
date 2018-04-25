var express = require("express");
var app = express();
var PORT=3000;

var middleware = require("./middleware");


app.use(middleware.requireAuthentication);

app.use(middleware.logger);

app.get("/hakkimda", function(req, res){
    res.send("Hakkımda sayfası!!!");
})

app.use(express.static(__dirname + "/public"))

app.listen(PORT, function () {
    console.log("express server" + PORT +" nolu portta çalışıyor");
});