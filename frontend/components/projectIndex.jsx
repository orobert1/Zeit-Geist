const React = require('react');
const ReactDOM = require('react-dom');
const Grid = require('../util/grid');
const CheckWindow = require('../util/checkWindow');
const ProjectActions = require('../actions/project_actions');
const SessionActions = require( '../actions/sessionActions' );
const SessionStore = require( '../stores/user_store' );
const ProjectStore = require( '../stores/project_store' );
const IndexItem = require( './indexItem' );
const FilterBar = require('./filterBar');
const absoluteProjects = require('../util/absoluteProject');
module.exports = React.createClass({

  componentDidMount(){
    let grid = new Grid();
    grid.alignTop( projectIndex, 0 );
    this.list = ProjectStore.addListener( this.__projChange );
    this.setState( { user: this.props.user } );
    ProjectActions.getAllProjects( {} );
    $(window).resize(this.state.absoluteProjects.shuffleAll.bind( this.state.absoluteProjects ));
  },

  componentWillReceiveProps( props ){
    this.setState({ user: props.user })
  },

  componentWillUnmount(){
    this.list.remove();
  },

  __projChange(){
    let projects = ProjectStore.getAllProjects();
    if( projects.length > 0 ){
      this.state.absoluteProjects.registerProjectLength( projects.length );
    }
    this.setState({ projects: projects, offset: this.state.offset + projects.length });

  },

  getInitialState(){
    return({ user: {}, projects: {}, break: false, offset: 0, absoluteProjects: new absoluteProjects() });
  },

  fadeIn( children ){
    let child = children.splice( 0,1 )
    $( child[0] ).css({ opacity: 1 });
    if( children.length > 0 ){
      window.setTimeout( function(){
        this.fadeIn( children );
      }.bind(this) ,100 )
    }
  },

  filter(){
    if( this.state.user ){
      return(
        <FilterBar />
      );
    }
  },

  projects(){
    if(this.state.user.id){
      if( this.state.projects.length ){
        return this.state.projects.map(function( el, index ){
          return (
            <IndexItem element = {el}
              index = { index}
              fade = { this.state.break }
              absolute = { this.state.absoluteProjects }
              pane = { this.props.pane }
              key = { index } />
          )
        }.bind(this))
      }
    }
  },

  render(){
    return(
      <div id = "projectIndex">
        <div className = "woof"/>
        {
          this.projects()
        }
      </div>
    )
  }
})
