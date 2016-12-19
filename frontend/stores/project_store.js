const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const Constants = require('../constants/constants');
const React = require('react');
const ReactDOM = require('react-dom');
const ProjectStore = new Store(AppDispatcher);

ProjectStore.allProjects = [];
ProjectStore.project = {};
ProjectStore.filter = {};

ProjectStore.changeAllProjects = function( projects ){
  this.allProjects = projects;
}

ProjectStore.getAllProjects = function(){
  return this.allProjects;
}

ProjectStore.reset = function(){
  this.allProjects = {};
},

ProjectStore.changeProject = function( project ){
  this.project = project;
}

ProjectStore.getCurrentFilter = function(){
  return this.filter;
}

ProjectStore.setCurrentFilter = function( filter ){
  this.filter = { filters: filter };
}

ProjectStore.getProject = function(){
  return this.project;
}

ProjectStore.removeProject = function(){
  this.project = {};
}

ProjectStore.__onDispatch = function( payload ){
  switch (payload.actionType){
    case Constants.RECEIVE_PROJECTS:
    this.changeAllProjects( payload.data );
    this.__emitChange();
    break
    case Constants.RECEIVE_PROJECT:
    this.changeProject( payload.data );
    this.__emitChange();
    break;
    case Constants.REMOVE_PROJECT:
    this.removeProject();
    this.__emitChange();
    break;
    case Constants.REMOVEALLPROJECTS:
    this.reset();
    this.__emitChange();
    break;
    case Constants.CHANGEFILTER:
    this.setCurrentFilter( payload.filter )
    this.__emitChange();
    break;
  }
}

module.exports = ProjectStore;
