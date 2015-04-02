var React = require('react');
var DOM = React.DOM;

var AppConstants = require('../constants/AppConstants');
var Navigate = React.createFactory(require('./Navigate'));

var Pages = AppConstants.Pages;

var NotFound = React.createClass({

  displayName: 'NotFound',

  propTypes: {
    appState: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      DOM.div(null,
        DOM.h1(null, 'Page not found'),
        DOM.h2(null, '404'),
        DOM.ul(null,
          DOM.li(null,
            Navigate({page: Pages.HOME}, 'Go to "home"')),
          DOM.li(null,
            Navigate({page: Pages.HELLO_WORLD}, 'Go to "hello world"'))
        )
      )
    );
  }
});

module.exports = NotFound;
