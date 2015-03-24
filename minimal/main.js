// main.js
var React = require('react');
var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');
var DOM = React.DOM;

var AppClass = React.createClass({
  render: function() {
    return DOM.html({lang: 'en'},
      DOM.head(null,
        DOM.meta({charSet: 'utf-8'}),
        DOM.title(null, 'minimal demo')
      ),
      DOM.body(null,
        DOM.div(null, 'minimal demo application'),
        DOM.script({src: '/main-built.js'}),
        DOM.script({dangerouslySetInnerHTML: {__html:
          'main.start();'
        }})
      )
    );
  }
});

var App = React.createFactory(AppClass);

function start() {
  if (ExecutionEnvironment.canUseDOM) {
    React.render(App(), document);
  } else {
    return '<!doctype html>' + React.renderToString(App());
  }
}

module.exports.start = start;
