const ApiUtil = require('../util/apiutil');
const Dispatcher = require('../dispatcher/dispatcher')
const Constants = require('../constants/constants');
module.exports = {
  getAllProjects( filters ){
    ApiUtil.getAllProjects( filters, this.receiveProjectActions );
  },

  receiveProjectActions( data ){
    Dispatcher.dispatch({
      actionType: Constants.RECEIVE_PROJECTS,
      data: data
    })
  }
  // newProject(data, fnc){
  //   ApiUtil.createProject(data, this.createProject,fnc)
  // },
  //
  // getProjectImages(id){
  //   ApiUtil.getImages(id, this.getImages);
  // },
  // destroyProject(id, fnc){
  //
  //   ApiUtil.destroyProject(id, fnc);
  // },
  //
  // updateCoverPhoto(data,fnc){
  //   ApiUtil.editProject(data,fnc);
  // },
  // updateProject(data,fnc){
  //   ApiUtil.editProject(data,fnc);
  // },
  // getProject(id){
  //   ApiUtil.getProject(id, this.loadPost);
  // },
  // loadProjectIndex(date){
  //   ApiUtil.getProjects(date, this.loadPosts);
  // },
  // getImages(data){
  //   Dispatcher.dispatch({
  //     actionType: Constants.GetImages,
  //     data: data
  //   });
  // },

  // createProject(data, fnc){
  //   Dispatcher.dispatch({
  //     actionType: Constants.CreateProject,
  //     data: data,
  //     fnc: fnc
  //   });
  // },
  // loadPosts(posts){
  //   Dispatcher.dispatch({
  //     actionType: Constants.LOAD_INDEX,
  //     posts: posts
  //   })
  // },
  // addImageToImageStore(img){
  //   Dispatcher.dispatch({
  //     actionType: Constants.AddImage,
  //     img: img
  //   })
  // },
  // loadPost(post){
  //
  //   Dispatcher.dispatch({
  //     actionType: Constants.GET_PROJECT,
  //     post: post
  //   })
  // }

};
