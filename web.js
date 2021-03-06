var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

// app.get('/', function(request, response) {
//   response.send('Hello World 2!');
// });

app.get('/', function(request, response) {
	var data = fs.readFileSync('./index.html'.toString());
	response.send(data.toString());
});

var port = process.env.PORT || 5500;
app.listen(port, function() {
  console.log("Listening on " + port);
});
