const React = require('react');
const ReactDOM = require('react-dom');
const ApiUtil = require('../util/apiutil');
const Dispatcher = require('../dispatcher/dispatcher');
const Constants = require('../constants/constants');
const ProjectIndexStore = require('../stores/project_index_store');
const ContentStore = require('../stores/content_store')
const ProjectActions = require("./project_actions");
module.exports = {
  createUser(data){
    ApiUtil.createUser(data, this.Create_User);
  },
  getMoreProjects(){

    ProjectIndexStore.setFetchTrue();
    if(window.location.hash.substring(2,6) === "prof"){
      console.log("Ass")
      this.getUserProfile(ContentStore.getUserProfile().id,
      ProjectIndexStore.getLastDate(),12);
    }else{
      ProjectActions.loadProjectIndex(ProjectIndexStore.getLastDate(), ProjectActions.loadPosts);
    }
  },
  getUser(id){
    ApiUtil.getUser(id, this.receiveUser);
  },

  getUserProfile(id,creation,max){
    ApiUtil.getUserProfile(id,creation,max, this.receiveUserProjects)
  },
  Create_User(user){
    Dispatcher.dispatch({
      actionType: Constants.CREATE_USER,
      user: user
    });
  },
  receiveUser(user){
    Dispatcher.dispatch({
      actionType: Constants.RECEIVE_USER,
      user: user
    });
  },
  receiveUserProjects(payload){

    Dispatcher.dispatch({
      actionType: Constants.RECEIVE_USER_PROJECTS,
      projects: payload.projects
    });
    Dispatcher.dispatch({
      actionType: Constants.UPDATE_PROFILE,
      user: payload.user
    });
  }

};
