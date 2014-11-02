var React = require('react');

var AppConstants = require('../constants/AppConstants');
var Navigate = require('./Navigate');

var Pages = AppConstants.Pages;

var Home = React.createClass({

  propTypes: {
    appState: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <div>
        <h1>Home</h1>
        <Navigate page={Pages.HELLO_WORLD}>Go to "hello world"</Navigate>
      </div>
    );
  }
});

module.exports = Home;
