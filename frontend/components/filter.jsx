const React = require('react');
const ReactDOM = require('react-dom');
const Grid = require('../util/grid');
const ProjectActions = require('../actions/project_actions');

module.exports = React.createClass({
  componentDidMount(){
    $( '.filter' ).css({ transitions: "1s" });
    let filter = document.getElementById( this.props.name );
    let grid = new Grid();
    grid.picWidth( filter, 4 );
    grid.alignLeft( filter, this.props.left );

  },

  changeDecoration(){
    $( '.filter' ).css({ color: "white" });
    let filter = document.getElementById( this.props.name );
    filter.style.color = "rgb( 0, 0, 0 )";
  },

  click(){
    let filterPackage = { filters: this.props.name };
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
