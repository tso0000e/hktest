// app.js
var express = require('express');  
var app = express();  
//var server = require('http').createServer(app);  
//var io = require('socket.io')(server);

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/node_modules'));  

app.get('/', function(req, res) {  
    res.sendFile(__dirname + '/index.html');
});

//server.listen(8080);  
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});