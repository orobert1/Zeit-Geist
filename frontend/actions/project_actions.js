const ApiUtil = require('../util/apiutil');
const Dispatcher = require('../dispatcher/dispatcher')
const Constants = require('../constants/constants');
module.exports = {
  newProject(data){
    ApiUtil.createProject(data, this.createProject)
  },

  createProject(data){
    Dispatcher.dispatch({
      actionType: Constants.CreateProject,
      data: data
    });
  }

};
