const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const Constants = require('../constants/constants');
const React = require('react');
const ReactDOM = require('react-dom');
const ProjectStore = new Store(AppDispatcher);

ProjectStore.allProjects = {};
ProjectStore.project = {};
ProjectStore.filter = {};
ProjectStore.projectCreated = {}
ProjectStore.projectsLength = 0;
ProjectStore.createProject = false;

ProjectStore.changeAllProjects = function( projects ){
  this.allProjects = {}
  ProjectStore.projectsLength = 0;
  for (var i = 0; i < projects.length; i++) {
    if( !this.allProjects[ projects[i].project.id ] ){
      this.allProjects[ projects[i].project.id ] = projects[i];
      this.allProjects[ projects[i].project.id ].index = this.projectsLength;
      this.projectsLength++;
    }
  }
}

ProjectStore.setCreateProjectTrue = function(){
  this.createProject = true;
}

ProjectStore.setCreateProjectFalse = function(){
  this.createProject = false;
}

ProjectStore.getProjectCreationStatus = function(){
  return this.createProject;
}

ProjectStore.getAllProjects = function(){
  let keys = Object.keys( this.allProjects );
  let projects = [];
  for (var i = 0; i < keys.length; i++) {
    let project = this.allProjects[ keys[i] ];
    projects[project.index] = project
  }
  return projects
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

ProjectStore.setProjectCreated = function( project ){
  this.projectCreated = project;
}

ProjectStore.getProjectCreated = function(){
  return this.projectCreated;
}

ProjectStore.addProjects = function( projects ){
  for (var i = 0; i < projects.length; i++) {
    if( !this.allProjects[ projects[i].project.id ] ){
      this.allProjects[ projects[i].project.id ] = projects[i];
      this.allProjects[ projects[i].project.id ].index = this.projectsLength;
      this.projectsLength++;
    }
  }
}

ProjectStore.clearProjectCreated = function(){
  this.projectCreated = {};
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
    case Constants.TRIGGERPROJECTCREATION:
    this.setCreateProjectTrue();
    this.__emitChange();
    break;
    case Constants.TRIGGERPROJECTCREATIONREMOVAL:
    this.setCreateProjectFalse();
    this.__emitChange();
    break;
    case Constants.RECEIVECREATEDPROJECT:
    this.setProjectCreated( payload.project )
    this.__emitChange();
    break;
    case Constants.CLEARPROJECTCREATED:
    this.clearProjectCreated();
    this.__emitChange();
    break;
    case Constants.MOREPROJECTS:
    this.addProjects( payload.data );
    this.__emitChange();
    break;

  }
}

module.exports = ProjectStore;
