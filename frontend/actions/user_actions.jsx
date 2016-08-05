const React = require('react');
const ReactDOM = require('react-dom');
const ApiUtil = require('../util/apiutil');
const Dispatcher = require('../dispatcher/dispatcher');
const Constants = require('../constants/constants');

module.exports = {
  createUser(data){
    ApiUtil.createUser(data, this.Create_User);
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
  }

};
