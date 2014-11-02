var React = require('react');

var AppConstants = require('../constants/AppConstants');
var Navigate = require('./Navigate');

var Pages = AppConstants.Pages;

var HelloWorld = React.createClass({

  propTypes: {
    appState: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Navigate page={Pages.HOME}>Go to "home"</Navigate>
      </div>
    );
  }
});

module.exports = HelloWorld;
