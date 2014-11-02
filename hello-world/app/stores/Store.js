var EventEmitter = require('events').EventEmitter;
var assign = require('react/lib/Object.assign');

var CHANGE_EVENT = 'change';

function Store() {}

assign(Store.prototype, EventEmitter.prototype, {

  /**
   * The token returned by `AppDispatcher.register(..)`
   * Can be used by `AppDispatcher.waitFor()`
   */
  dispatchToken: null,

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

module.exports = Store;
