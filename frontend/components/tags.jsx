const React = require('react');
const ReactDOM = require('react-dom');
const ProjectActions = require('../actions/project_actions');
const ProjectStore = require( '../stores/project_store' );
const Grid = require('../util/grid');


module.exports = React.createClass({
  getInitialState(){
    return( { tagInput: "", tags: [], filter: {} } )


  },

  componentDidMount(){
    ProjectStore.getCurrentFilter();
    ProjectStore.addListener( this.__changeFilter );
    let tagInput = document.getElementById("tagInput");
    let tagButton = document.getElementById("tagButton");

    const grid = new Grid();


  },

  __changeFilter(){

    let filter = ProjectStore.getCurrentFilter();
    this.setState({ filter: filter });

  },

  updateTagInput( e ){
    this.setState({ tagInput: e.target.value });
  },

  addNewTag(){
    this.setState({ tags: this.state.tags.concat( [this.state.tagInput] ) });
    let filter = {}
    filter.tags = this.state.tags.concat( [this.state.tagInput] );
    debugger
    if( this.state.filter.filters ){
      filter.filters = this.state.filter.filters;
    }
    ProjectActions.getAllProjects( {filter} );
  },

  tags(){


  },

  render(){
    return(
      <div className = "tagContainer" >
        <div className = "inputContainer" >
          <input id = "tagInput" type="text" value={this.state.tagInput} onChange={this.updateTagInput} className = "username" ></input>
        </div>
        <div className = "inputContainer" >
          <input id = "tagButton" type = "button" value = "Add Tag" onClick = { this.addNewTag }/>
        </div>

        {
          this.tags()
        }
      </div>
    )
  }
})
