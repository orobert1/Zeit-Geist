const React = require('react');
const ReactDOM = require('react-dom');
const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const Constants = require('../constants/constants');

const ProjectIndexStore = new Store(AppDispatcher);
let _projectIndex = [];

ProjectIndexStore.allProjects = function(){
  return _projectIndex;
}

ProjectIndexStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case Constants.loadIndex:
    _projectIndex = payload.posts;
    this.__emitChange();
    break
  }
};

module.exports = ProjectIndexStore;
