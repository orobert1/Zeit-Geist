const React = require('react');
const ReactDOM = require('react-dom');
const ProjectActions = require('../actions/project_actions');

module.exports = React.createClass({
  click(){
    let project = {
      projectId: this.props.project.project.id,
      el: this.props.el
    }
    ProjectActions.updateCoverPhoto( project );
    ProjectActions.clearProjectCreated();
    ProjectActions.triggerProjectCreationPaneRemoval();

  },

  render(){
    return(
      <img className = "chooseCoverImg" onClick = { this.click } src = { this.props.el.url }/>
    )
  }
})
