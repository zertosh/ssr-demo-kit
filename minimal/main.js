// main.js
var React = require('react');
var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');

var App = React.createClass({
  render: function() {
    return React.createElement('html', {lang: 'en'},
      React.createElement('head', null,
        React.createElement('meta', {charSet: 'utf-8'}),
        React.createElement('title', null, 'minimal demo')
      ),
      React.createElement('body', null,
        React.createElement('div', null, 'minimal demo application'),
        React.createElement('script', {src: '/main-built.js'}),
        React.createElement('script', {dangerouslySetInnerHTML: {__html:
          'Application.start();'
        }})
      )
    );
  }
});

function start() {
  if (ExecutionEnvironment.canUseDOM) {
    React.render(React.createElement(App), document);
  } else {
    return '<!DOCTYPE html>' + React.renderToString(React.createElement(App));
  }
}

module.exports.start = start;
