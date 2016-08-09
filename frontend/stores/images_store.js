const React = require('react');
const ReactDOM = require('react-dom');
const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const Constants = require('../constants/constants');

const ImagesStore = new Store(AppDispatcher);
let _images = [];

ImagesStore.getImages = function(){
  return _images;
}
ImagesStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case Constants.GetImages:
    _images = payload.data;
    this.__emitChange();
    break;
    case Constants.AddImage:
    _images.push(payload.img);
    this.__emitChange();
    break;
  }
}

module.exports = ImagesStore;
