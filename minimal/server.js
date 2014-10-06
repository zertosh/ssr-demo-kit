// server.js
var express = require('express');
var server = express();
server.use('/', express.static('./'));
server.get('*', function(req, res) {
  var Application = require('./main-built');
  res.send(Application.start());
});
server.listen(8000);
