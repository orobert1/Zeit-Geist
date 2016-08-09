const React = require('react');
const ReactDOM = require('react-dom');
const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const Constants = require('../constants/constants');

const ProjectIndexStore = new Store(AppDispatcher);

ProjectIndexStore.__onDispatch = function(){
  
};

module.exports = ProjectIndexStore;
