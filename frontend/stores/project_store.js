const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const Constants = require('../constants/constants');
const React = require('react');
const ReactDOM = require('react-dom');
const ProjectStore = new Store(AppDispatcher);

ProjectStore.allProjects = [];

ProjectStore.changeAllProjects = function( projects ){
  this.allProjects = projects;
}

ProjectStore.getAllProjects = function(){
  return this.allProjects;
}

ProjectStore.changeCurrentProject = function(newProject){
  _currentProject = newProject;
  return _currentProject;
}

ProjectStore.getCurrentProject = function(){
  return _currentProject;
}

ProjectStore.addContent = function(content){
  _projectContent.push(content);
};

ProjectStore.getProjectContent = function(){
  return _projectContent;
}

ProjectStore.__onDispatch = function( payload ){
  switch (payload.actionType){
    case Constants.RECEIVE_PROJECTS:
    this.changeAllProjects( payload.data );
    this.__emitChange();
    break;
  }
}

module.exports = ProjectStore;
