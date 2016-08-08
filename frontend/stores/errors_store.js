const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const Constants = require('../constants/constants');
const React = require('react');
const ReactDOM = require('react-dom');
const ErrorStore = new Store(AppDispatcher);

let _errors = [];

ErrorStore.getAllErrors = function(){
  return _errors;
}

ErrorStore.addError = function(bad_shit){
  _errors.push(bad_shit);
}

ErrorStore.count = function(){
  return _errors.length;
}
ErrorStore.__onDispatch = function(){

};
module.exports = ErrorStore;
