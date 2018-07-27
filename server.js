var express = require('express');
var app = express();

// set port
var port = process.env.PORT || 8080

app.use(express.static(__dirname + "/public"));

// routes

app.get('/', function(req, res){
	res.render("chessAI");
})

app.listen(port, function(){
	console.log("App running")
})