// Use source maps in stack traces
if (process.env.NODE_ENV !== 'production') {
  require('source-map-support').install();
}

var _ = require('underscore');
var express = require('express');
var fs = require('fs');
var htmlescape = require('htmlescape');
var morgan = require('morgan');

var ServerConstants = require('./constants/ServerConstants');

var Config = ServerConstants.Config;
var LayoutConfig = ServerConstants.LayoutConfig;

var server = express();
var layout = _.template(fs.readFileSync(Config.LAYOUT_FILE, 'utf8'));

server.use(morgan('dev'));
server.use('/', express.static(Config.PUBLIC_DIR));

server.get('*', function(req, res) {

  var bootstrap = {
    path: req.path
  };

  var layoutData = _.defaults({
    applicationStart: 'Application.start(' + htmlescape(bootstrap) + ');',
  }, LayoutConfig);

  var status;

  if (Config.SSR) {
    var Application = require(Config.APPLICATION_FILE);
    var rootComponentHTML = Application.start(bootstrap);
    layoutData.rootComponentHTML = rootComponentHTML;
    status = Application.RouteUtils.hasMatch(req.path) ? 200 : 404;
  } else {
    status = 200;
  }

  var markup = layout(layoutData);

  res.status(status).send(markup);
});

server.listen(Config.PORT);

console.log('Server started with NODE_ENV="%s" on PORT="%s"', Config.NODE_ENV, Config.PORT);
