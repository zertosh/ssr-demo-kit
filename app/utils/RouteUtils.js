var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');
var RouteBuilder = require('route-builder');

var AppConstants = require('../constants/AppConstants');
var RouteConstants = require('../constants/RouteConstants');

var Pages = AppConstants.Pages;
var RouteConfig = RouteConstants.RouteConfig;

var router = RouteBuilder(RouteConstants.ROUTES);

var RouteUtils = {

  getBestAvailablePath: function(options) {
    if (options && options.path) {
      return options.path;
    } else if (ExecutionEnvironment.canUseDOM) {
      return window.location.pathname;
    } else {
      return RouteConfig.DEFAULT_PATH;
    }
  },

  getPage: function(path) {
    var match = router.match(path);
    return (match && match.name) || Pages.NOT_FOUND;
  },

  hasMatch: function(path) {
    return RouteUtils.getPage(path) !== Pages.NOT_FOUND;
  },

  makePath: function(name, params) {
    return router.makePath(name, params);
  }
};

module.exports = RouteUtils;
