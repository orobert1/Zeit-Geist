const React = require('react');
const ReactDOM = require('react-dom');
const ProjectActions = require('../actions/project_actions');
const $ = require('jquery');

module.exports = React.createClass({
  componentWillReceiveProps( props ){
    let target = `targetItem${this.props.element.project.id}`;
    let payload = {
      index: this.props.index,
      target: target,
      project: this.props.element.project,
      user: this.props.element.user
    }
    this.props.absolute.addProject( payload );
  },

  componentDidMount(){
    let target = `targetItem${this.props.element.project.id}`;
    let payload = {
      click: this.click,
      index: this.props.index,
      target: target,
      project: this.props.element.project,
      user: this.props.element.user
    }
    this.props.absolute.addProject( payload );
  },

  reloadItem(){
    this.props.absolute.reloadImage( this.props.element.project.id );
  },



  click(){
    ProjectActions.getProject( this.props.element.project.id );
  },

  render(){
    return(
      <div className = { "targetItem" } id = { "targetItem" + this.props.element.project.id } >
        <img src = {this.props.element.project.cover_image} onLoad = { this.reloadItem } className = "indexCover" id = { "targImg" + this.props.element.project.id } />
      </div>
    )
  }
});
