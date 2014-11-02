var React = require('react');

var AppConstants = require('../constants/AppConstants');
var AppStore = require('../stores/AppStore');
var PopStateMixin = require('./Navigate').PopStateMixin;

var Pages = AppConstants.Pages;

function getPageComponent(page) {
  switch (page) {
    case Pages.HOME:        return require('./Home.jsx');
    case Pages.HELLO_WORLD: return require('./HelloWorld.jsx');
    case Pages.NOT_FOUND:   return require('./NotFound');
    default:
      throw new Error('Missing "Pages.' + page + '"');
  }
}

function getStateFromStores() {
  return {
    appState: AppStore.getState()
  };
}

var App = React.createClass({

  displayName: 'App',

  mixins: [PopStateMixin],

  _onChange: function() {
    this.setState(getStateFromStores());
  },

  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    AppStore.removeChangeListener(this._onChange);
  },

  render: function() {
    var appState = this.state.appState;
    var PageComponent = getPageComponent(appState.page);
    return React.createElement(PageComponent, {appState: appState});
  }
});

module.exports = App;
