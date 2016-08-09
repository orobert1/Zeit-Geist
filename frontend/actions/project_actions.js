const ApiUtil = require('../util/apiutil');
const Dispatcher = require('../dispatcher/dispatcher')
const Constants = require('../constants/constants');
module.exports = {
  newProject(data, fnc){
    ApiUtil.createProject(data, this.createProject,fnc)
  },

  getProjectImages(id){
    ApiUtil.getImages(id, this.getImages);
  },

  updateCoverPhoto(data,fnc){
    ApiUtil.editProject(data,fnc);
  },
  getImages(data){
    Dispatcher.dispatch({
      actionType: Constants.GetImages,
      data: data
    });
  },

  createProject(data, fnc){
    Dispatcher.dispatch({
      actionType: Constants.CreateProject,
      data: data,
      fnc: fnc
    });
  },

  addImageToImageStore(img){
    Dispatcher.dispatch({
      actionType: Constants.AddImage,
      img: img
    })
  }

};
