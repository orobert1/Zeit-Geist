const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const Constants = require('../constants/constants');
const React = require('react');
const ReactDOM = require('react-dom');
const ContentStore = new Store(AppDispatcher);
const ApiUtil = require('../util/apiutil');
const ProjectStore = require('./project_store');
const ErrorStore = require('./errors_store');
const ProjectActions = require('../actions/project_actions');
let _content = {};
let _project = {};
let _images = [];
let _queue = [];
let _user_profile = {};
let _date_last_updated = "1999-08-10T14:13:03.790Z";
ContentStore.getLastDate = function(){
  return _date_last_updated;
}

ContentStore.setLastDate = function(date){
  _date_last_updated = date;
}

ContentStore.addContent = function(item){
  _content[item.id] = item;
};
ContentStore.addImage = function(image){
  _content[image.id] = image;
};
ContentStore.getUserProfile = function(){
  return _user_profile;
},
ContentStore.setUserProfile = function(profile){
  _user_profile = profile;
}

ContentStore.getProject = function(){
  return _project;
};

ContentStore.setProject = function(project){
  _project = project;
};

ContentStore.removeAllImages = function(){
  _content = {};
};

ContentStore.allImages = function(){
  return _content;
};

ContentStore.__getImages = function(){

};

ContentStore.getImages = function(){
  return _images;
}
ContentStore.removeFromQueue = function(item){
  _queue.shift();
  ProjectActions.addImageToImageStore(item);
  return item;
};

ContentStore.checkQueue = function(){
  return _queue;
}
ContentStore.__onDispatch = function(payload){

  switch(payload.actionType){
    case Constants.CreateProject:
    let project = payload.data;
    console.log(payload);
    ContentStore.setProject(project);
    let content = ContentStore.allImages();
    let keys = Object.keys(content)
    keys.forEach(function(el){
      let cont = content[el];
      cont.project_index = project.id;
      if(cont.image){
        _queue.push(cont);
        let formData = new FormData();
        formData.append("image[image]", cont.image.image);
        formData.append("image[id]", cont.id);
        formData.append("image[project_id]", cont.project_index);
        ApiUtil.createImage(formData, ContentStore.removeFromQueue, ErrorStore.addError);
      }else{
        ApiUtil.createDescription(cont, ProjectStore.addContent, ErrorStore.addError);
      }
    });
    payload.fnc()
    ContentStore.__emitChange();
    break;

    case Constants.GET_PROJECT:
    _project = payload.post;
    ContentStore.__emitChange();
    break

    case Constants.UPDATE_PROFILE:
    this.setUserProfile(payload.user);
    ContentStore.__emitChange();
    break


  }
};

module.exports = ContentStore;
