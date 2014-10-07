// main.js
var React = require('react');
var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');
var DOM = React.DOM;

var App = React.createClass({
  render: function() {
    return DOM.html({lang: 'en'},
      DOM.head(null,
        DOM.meta({charSet: 'utf-8'}),
        DOM.title(null, 'Demo')
      ),
      DOM.body(null,
        DOM.div(null, 'Hello World!'),
        DOM.script({src: '/main-built.js'}),
        DOM.script({dangerouslySetInnerHTML: {__html:
          'Application.start();'
        }})
      )
    );
  }
});

function start() {
  if (ExecutionEnvironment.canUseDOM) {
    React.renderComponent(App(), document);
  } else {
    return '<!DOCTYPE html>' + React.renderComponentToString(App());
  }
}

module.exports.start = start;
