// For debugging in the browser
if (process.env.NODE_ENV !== 'production' &&
    require('react/lib/ExecutionEnvironment').canUseDOM) {
  window.React = require('react');
}

/**
 * Application Entry
 */
var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');
var React = require('react');

var App = React.createFactory(require('./components/App'));
var AppActions = require('./actions/AppActions');
var AppConstants = require('./constants/AppConstants');

var LayoutConfig = AppConstants.LayoutConfig;

var Application = {
  start: function(bootstrap) {
    // Ready the stores
    AppActions.initialize(bootstrap);

    // Client-side: mount the app component
    if (ExecutionEnvironment.canUseDOM) {
      var rootElement = document.getElementById(LayoutConfig.ROOT_ELEMENT_ID);
      React.render(App(), rootElement);
    } else {
    // Server-side: return the app's html
      var rootComponentHTML = React.renderToString(App());
      return rootComponentHTML;
    }
  }
};

// Modules needed server-side
if (!ExecutionEnvironment.canUseDOM) {
  Application.RouteUtils = require('./utils/RouteUtils');
}

module.exports = Application;
