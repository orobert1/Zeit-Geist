const React = require('react');
const ReactDOM = require('react-dom');
const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const CurrentUserStore = new Store(AppDispatcher);
const Constants = require('../constants/constants');
let _currentUser = {};
let _received_data = false;

CurrentUserStore.current_user = function(){
  return _currentUser;
};

CurrentUserStore.logged_in = function(){
  return _currentUser.username;
};

CurrentUserStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case Constants.RECEIVE_USER:
    _currentUser = payload.user;
    _received_data = true;
    this.__emitChange();
    break;
    case Constants.CURRENT_USER:
    _currentUser = payload.user;
    _received_data = true;
    this.__emitChange();
    break;
    case Constants.REMOVE_USER:
    _currentUser = {};
    _received_data = false;
    this.__emitChange();
    break;
    case Constants.CREATE_USER:
    _currentUser = payload.user;
    _received_data = true;
    this.__emitChange();
  }
};

module.exports = CurrentUserStore;
