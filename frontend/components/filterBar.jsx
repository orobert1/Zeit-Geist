const React = require('react');
const ReactDOM = require('react-dom');
const Grid = require('../util/grid');
const Filter = require('./filter.jsx');
const $ = require('jquery');


module.exports = React.createClass({
    getInitialState(){
      return({ filter: "public" });
    },



    render(){
      return (
        <div className = "spacer">
          <Filter name = "Public" left = { 2 } />
          <Filter name = "Following" left = { 5 } />
          <Filter name = "Personal" left = { 8 } />
        </div>
      );
    }
});
