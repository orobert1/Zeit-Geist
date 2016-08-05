const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const Constants = require('../constants/constants');
const React = require('react');
const ReactDOM = require('react-dom');
const ContentStore = new Store(AppDispatcher);

let _content = {};

ContentStore.addContent = function(item){
  _content[item.id] = item;
};

ContentStore.removeAllImages = function(){
  _content = {};
};

ContentStore.allImages = function(){
  return _content;
};

ContentStore.__onDispatch = function(){

};

module.exports = ContentStore;
