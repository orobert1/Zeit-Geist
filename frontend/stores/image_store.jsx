const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const Constants = require('../constants/constants');
const React = require('react');
const ReactDOM = require('react-dom');
const ImageStore = new Store(AppDispatcher);

let _images = {};

ImageStore.addImage = function(image){
  _images[image.url] = image;
};

ImageStore.removeAllImages = function(){
  _images = {};
};

ImageStore.__onDispatch = function(){

};

module.exports = ImageStore;
