const React = require('react');
const ReactDOM = require('react-dom');
const ApiUtil = require('../util/apiutil');
const Dispatcher = require('../dispatcher/dispatcher');
const Constants = require('../constants/constants');

module.exports = {
  logInUser(data){
    ApiUtil.logIn(data, this.Receive_User);
  },
  logOutUser(){
    ApiUtil.logOut(this.Remove_User);
  },
  checkCurrentUser(){
    ApiUtil.currentUser(this.Check_User);
  },

  Receive_User(user){
    Dispatcher.dispatch({
      actionType: Constants.RECEIVE_USER,
      user: user
    });
  },
  Check_User(user){
    Dispatcher.dispatch({
      actionType: Constants.CURRENT_USER,
      user: user
    });
  },
  Remove_User(user){
    Dispatcher.dispatch({
      actionType: CONSTANTS.REMOVE_USER
    });
  }

};
