const React = require('react');
const ReactDOM = require('react-dom');
const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const Constants = require('../constants/constants');
const UserStore = new Store(AppDispatcher);

let _users = {};

UserStore.find = function(id){
  return _users[id];
};

UserStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case Constants.RECEIVE_USER:
    _users[payload.user.id] = payload.user;
    this.__emitChange();
    break;
  }
};

module.exports = UserStore;
