const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const Constants = require('../constants/constants');
const React = require('react');
const ReactDOM = require('react-dom');
const ProjectStore = new Store(AppDispatcher);

let _currentProject = "";
let _projectContent = [];
let _finished = false;

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

ProjectStore.__onDispatch = function(){

}

module.exports = ProjectStore;
