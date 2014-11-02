var EventListener = require('react/lib/EventListener');
var React = require('react');

var AppActions = require('../actions/AppActions');
var AppConstants = require('../constants/AppConstants');
var RouteUtils = require('../utils/RouteUtils');

var Pages = AppConstants.Pages;

function getHref(page, params) {
  var href = RouteUtils.makePath(page, params);
  return {href: href};
}

var Navigate = React.createClass({

  displayName: 'Navigate',

  propTypes: {
    page: React.PropTypes.oneOf(Object.keys(Pages)).isRequired,
    params: React.PropTypes.object
  },

  getInitialState: function() {
    return getHref(this.props.page, this.props.params);
  },

  componentWillReceiveProps: function(nextProps) {
    return this.setState(getHref(nextProps.page, nextProps.params));
  },

  onClick: function(e) {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
    if (e.metaKey || e.shiftKey || e.altKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    var href = this.state.href;
    var page = this.props.page;
    if (window.location.pathname !== href) {
      window.history.pushState({}, document.title, href);
    }
    AppActions.navigateSwitchPage(href, page);
  },

  render: function() {
    return React.createElement('a',
      React.__spread({}, this.props, {onClick: this.onClick, href: this.state.href}),
      this.props.children);
  },

  statics: {

    PopStateMixin: {
      _popStateListener: null,

      _onPopState: function(e) {
        var url = location.pathname;
        AppActions.popStateSwitchPage(url);
      },

      componentDidMount: function() {
        var listener = EventListener.listen(window, 'popstate', this._onPopState);
        this._popStateListener = listener;
      },

      componentWillUnmount: function() {
        this._popStateListener.remove();
        this._popStateListener = null;
      }
    }

  }

});

module.exports = Navigate;
