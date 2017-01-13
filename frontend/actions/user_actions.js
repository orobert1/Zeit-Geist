const ApiUtil = require('../util/apiutil');
const Dispatcher = require('../dispatcher/dispatcher')
const Constants = require('../constants/constants');
const ProjectStore = require('../stores/project_store');
module.exports = {
  getUser( id ){
    ApiUtil.getUser( id, this.recieveUser );
  },

  recieveUser( payload ){
    Dispatcher.dispatch({
      actionType: Constants.RECEIVEUSERPAGEUSER,
      payload: payload
    })
  }
};
