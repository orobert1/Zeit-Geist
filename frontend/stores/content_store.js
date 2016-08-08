const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const Constants = require('../constants/constants');
const React = require('react');
const ReactDOM = require('react-dom');
const ContentStore = new Store(AppDispatcher);
const ApiUtil = require('../util/apiutil');
const ProjectStore = require('./project_store');
const ErrorStore = require('./errors_store');
let _content = {};

ContentStore.addContent = function(item){
  _content[item.id] = item;
};

ContentStore.removeAllImages = function(){
  _content = {};
};

ContentStore.allImages = function(){
  return _content;
};

ContentStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case Constants.CreateProject:
    let project_id = payload.data;
    ProjectStore.changeCurrentProject(project_id);
    let content = this.allImages();
    let keys = Object.keys(content)
    keys.forEach(function(el){
      let cont = content[el];
      cont.project_index = project_id;
      if(cont.image){
        let formData = new FormData();
        formData.append("image[image]", cont.image.image);
        formData.append("image[id]", cont.id);
        formData.append("image[project_id]", cont.project_index);
        ApiUtil.createImage(formData, ProjectStore.addContent, ErrorStore.addError);
      }else{
        ApiUtil.createDescription(cont, ProjectStore.addContent, ErrorStore.addError);
      }
      ProjectStore.finished = true;

    });
    break
  }
};

module.exports = ContentStore;
