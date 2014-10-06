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

var App = require('./components/App');
var AppActions = require('./actions/AppActions');
var AppConstants = require('./constants/AppConstants');

var LayoutConfig = AppConstants.LayoutConfig;

var Application = {
  start: function(bootstrap) {
    // Ready the stores
    AppActions.initialize(bootstrap);

    // Server-side: return the app instance
    if (!ExecutionEnvironment.canUseDOM) {
      return App();
    }

    // Client-side: mount the app component
    var rootElement = document.getElementById(LayoutConfig.ROOT_ELEMENT_ID);
    React.renderComponent(App(), rootElement);
  }
};

// Modules needed server-side
if (!ExecutionEnvironment.canUseDOM) {
  Application.React = React;
  Application.RouteUtils = require('./utils/RouteUtils');
}

module.exports = Application;
