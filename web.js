var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var FILE_DEFAULT = "index.html";

var buffer = new Buffer(fs.readFileSync(FILE_DEFAULT));

app.use(express.static(__dirname + '/bootstrap'));

app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8'));
});



var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
