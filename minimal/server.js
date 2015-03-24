// server.js
var express = require('express');
var server = express();
server.use('/', express.static('./'));
server.get('*', function(req, res) {
  var main = require('./main-built');
  var html = main.start();
  res.send(html);
});
server.listen(8000);
