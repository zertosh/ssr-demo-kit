var AppConstants = require('./AppConstants');

var Pages = AppConstants.Pages;

module.exports = {

  RouteConfig: {
    DEFAULT_PATH: '/'
  },

  ROUTES: [
    [Pages.HOME, '/'],
    [Pages.HELLO_WORLD, '/helloworld']
  ]
};
