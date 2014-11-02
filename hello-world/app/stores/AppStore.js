var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var Store = require('./Store');
var assign = require('react/lib/Object.assign');

var ActionTypes = AppConstants.ActionTypes;

var appState;

function reset() {
  appState = {};
}

var AppStore = assign(new Store(), {
  getState: function() {
    return appState;
  }
});

AppStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch (action.type) {
    case ActionTypes.APP_INITIALIZE:
      reset();
      /* falls through */
    case ActionTypes.SWITCH_PAGE:
      appState.page = action.page;
      appState.path = action.path;
      break;

    case ActionTypes.APP_RESET:
      reset();
      break;

    default:
      return;
  }

  AppStore.emitChange();
});

module.exports = AppStore;
