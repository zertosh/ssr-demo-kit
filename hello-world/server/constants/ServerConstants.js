var path = require('path');

module.exports = {

  Config: {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT || 5000,
    SSR: true,
    PUBLIC_DIR: path.resolve('public'),
    APPLICATION_FILE: path.resolve('public/main.js'),
    LAYOUT_FILE: path.resolve('server/views/layout.tmpl'),
  },

  LayoutConfig: {
    title: '',
    favicon: 'about:blank',
    stylesheet: '/main.css',
    script: '/main.js',
    componentMarkup: '',
    applicationStart: 'Application.start();',
    // Keep in sync with `app/constants/AppConstants.js`
    ROOT_ELEMENT_ID: 'ReactRootElement'
  }
};
