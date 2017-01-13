const React = require('react');
const ReactDOM = require('react-dom');
const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const Constants = require('../constants/constants');
const UserStore = new Store(AppDispatcher);

UserStore.user = {};
UserStore.userPage = {};

UserStore.updateUserPage = function( user ){
  this.userPage = user;
}

UserStore.getUserPage = function(){
  return this.userPage
}

UserStore.resetUserPage = function(){
  return this.userPage
}

UserStore.currentUser = function(){
  return this.user;
}

UserStore.removeUser = function(){
  this.user = {};
}

UserStore.changeUser = function( user ){
  this.user = user;
}

UserStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case Constants.RECEIVE_USER:
    this.changeUser( payload.user );
    this.__emitChange();
    break;
    case Constants.CURRENT_USER:
    this.changeUser( payload.user );
    this.__emitChange();
    break;
    case Constants.REMOVE_USER:
    this.removeUser();
    this.__emitChange();
    break;
    case Constants.RECEIVEUSERPAGEUSER:
    this.updateUserPage( payload.payload );
    this.__emitChange();
    break
  }
};

module.exports = UserStore;
