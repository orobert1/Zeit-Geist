const React = require('react');
const ReactDOM = require('react-dom');
const ProjectActions = require('../actions/project_actions');
const ProjectStore = require( '../stores/project_store' );
const Grid = require( '../util/grid' );
const Tag = require( './tag' );
const ProjectACtions = require( '../actions/project_actions' );


module.exports = React.createClass({
  getInitialState(){
    return( { tagInput: "", tags: [], filter: {} } )


  },

  componentDidMount(){
    ProjectStore.getCurrentFilter();
    ProjectStore.addListener( this.__changeFilter );
    let tagInput = document.getElementById("tagInput");
    let tagContainer = document.getElementById("tagContainer");

    const grid = new Grid();
    grid.picWidth( tagContainer, 30 );


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
    if( this.state.filter.filters ){
      filter.filters = this.state.filter.filters;
    }
    ProjectActions.getAllProjects( {filter} );
  },



  tags(){
    return this.state.tags.map( function( el, index ){
      return( <Tag el = { el } key = { index } callback = { this.removeTag }  ></Tag> )
    }.bind( this ))

  },

  removeTag( tagName ){
    for (var i = 0; i < this.state.tags.length; i++) {
      let tags = this.state.tags
      if( this.state.tags[i] === tagName){
        let removed = this.state.tags.splice( i, 1 );
        ProjectActions.getAllProjects({ tags: tags, filters: this.state.filter })
        this.setState({ tags: tags });
      }
    }
  },

  render(){
    return(
      <div className = "headTagging">
        <div id = "tagContainer" >
          {
            this.tags()
          }
        </div>
        <div id = "tagControls">
          <div className = "floatRight" > Add Tags</div>
          <input type="text" id = "tagInput" value = { this.state.tagInput } onChange = { this.updateTagInput }/>
          <input className = "floatRight"  type="button" id = "tagButton" value = "Add Tag"   onClick = { this.addNewTag } />
        </div>
      </div>
    )
  }
})
