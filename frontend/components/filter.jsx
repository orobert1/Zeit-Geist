const React = require('react');
const ReactDOM = require('react-dom');
const Grid = require('../util/grid');
const ProjectActions = require('../actions/project_actions');

module.exports = React.createClass({

  changeDecoration(){
    $( '.filter' ).css({ color: "transparent" });
    let filter = document.getElementById( this.props.name );
    filter.style.color = "rgb( 255, 0, 0 )";
  },

  click(){
    let filterPackage = { filters: this.props.name };
    ProjectActions.changeFilter( this.props.name );
    ProjectActions.getAllProjects( filterPackage );
    this.changeDecoration();
  },

  render(){
    return(
      <div className = "filter" id = { this.props.name } onClick = { this.click } >
        {
          this.props.name
        }
      </div>
    )
  }
})
