const React = require('react');
const ReactDOM = require('react-dom');
const ApiUtil = require('../util/apiutil');
const Dispatcher = require('../dispatcher/dispatcher');
const Constants = require('../constants/constants');
const ProjectIndexStore = require('../stores/project_index_store');
const CurrentUserStore = require('../stores/current_user_store')
module.exports = {
  createUser(data){
    ApiUtil.createUser(data, this.Create_User);
  },
  getMoreProjects(){
    ProjectIndexStore.setFetchTrue();
    this.getUser(CurrentUserStore.current_user().id,
    ProjectIndexStore.getLastDate(),12);
  },
  getUser(id){
    ApiUtil.getUser(id, this.receiveUser);
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
      actionType:
      user
    });
  }

};
