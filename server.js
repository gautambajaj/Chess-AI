var express = require('express');
var app = express();

// set port
var port = process.env.PORT || 8080

app.use(express.static(__dirname + '/static'));

// routes

app.get("/", function(req, res){
	res.sendFile(__dirname + "/static/chessAI.html");
})

app.listen(port, function(){
	console.log("App running")
})