var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var FILE_DEFAULT = "index.html";
file = file || FILE_DEFAULT;
var buffer = new Buffer(fs.readFileSync(file));

app.get('/', function(request, response) {
  response.send(buffer.toString()); 
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

    
