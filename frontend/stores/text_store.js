const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const Constants = require('../constants/constants');
const React = require('react');
const ReactDOM = require('react-dom');
const TextStore = new Store(AppDispatcher);

let _texts = {};

module.exports = TextStore;
