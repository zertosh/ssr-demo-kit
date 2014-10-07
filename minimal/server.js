// server.js
var express = require('express');
var server = express();
server.use('/', express.static('./'));
server.get('*', function(req, res) {
  var Application = require('./main-built');
  var html = Application.start();
  res.send(html);
});
server.listen(8000);
