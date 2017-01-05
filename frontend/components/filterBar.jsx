const React = require('react');
const ReactDOM = require('react-dom');
const Grid = require('../util/grid');
const Filter = require('./filter.jsx');
const Tags = require('./tags');
const $ = require('jquery');


module.exports = React.createClass({
    getInitialState(){
      return({ filter: "public" });
    },

    toggleTags(){
      let tagControls = document.getElementById( "tagControls" );
      if( $(tagControls).css( 'display' ) === "none" ){
        $(tagControls).css({ display: "block", opacity: 1 })
      }else{
        $(tagControls).css({ display: "none", opacity: 0 })
      }
    },

    render(){
      return (
        <div className = "filterBar">
            <Filter name = "Public"/>
            <Filter name = "Following"/>
            <Filter name = "Personal"/>
        </div>
      );
    }
});
