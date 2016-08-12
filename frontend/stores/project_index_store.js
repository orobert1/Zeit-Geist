const React = require('react');
const ReactDOM = require('react-dom');
const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const Constants = require('../constants/constants');

const ProjectIndexStore = new Store(AppDispatcher);
let _projectIndex = [];
let _last_project_date = "";
let _fetching_projects = false;
ProjectIndexStore.setFetchTrue = function(){
   _fetching_projects = true;
}
ProjectIndexStore.setFetchFalse = function(){
   _fetching_projects = false;
}
ProjectIndexStore.getLastDate = function(){
  return _last_project_date;
}
ProjectIndexStore.getFetchStatus = function(){
  return _fetching_projects;
}

ProjectIndexStore.updateDate = function(date){
  _last_project_date = date;
}

ProjectIndexStore.allProjects = function(){
  return _projectIndex;
}

ProjectIndexStore.__onDispatch = function(payload){


  switch(payload.actionType){
    case Constants.loadIndex:
    _projectIndex = payload.posts;
    this.__emitChange();
    break
    case Constants.RECEIVE_USER_PROJECTS:
    if(payload.projects.size != 1 || payload.project[0].id != _projectIndex[_projectIndex.length - 1].id ){
      _projectIndex = _projectIndex.concat(payload.projects);
    }
    this.__emitChange();
    break;
  }
};

module.exports = ProjectIndexStore;
