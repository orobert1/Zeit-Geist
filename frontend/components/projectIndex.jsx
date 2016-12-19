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

module.exports = React.createClass({

  componentDidMount(){
    let grid = new Grid();
    grid.alignTop( projectIndex, 0 );
    grid.picHeight( projectIndex, 20 );
    let projList = ProjectStore.addListener( this.__projChange );
    this.setState( { user: this.props.user } );
    ProjectActions.getAllProjects( {} );
  },

  componentWillReceiveProps( props ){
    this.setState({ user: props.user })
  },

  __projChange(){
    let projects = ProjectStore.getAllProjects();
    this.setState({ projects: projects });

  },

  getInitialState(){
    return({ user: {}, projects: {}, break: false });
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

  projects(){
    if(this.state.user.id){
      if( this.state.projects.length ){
        return this.state.projects.map(function( el, index ){
          return (
            <IndexItem element = {el}
              index = {index}
              fade = { this.state.break }
              pane = { this.props.pane }
              key = {index} />
          )
        }.bind(this))
      }
    }
  },

  render(){
    return(
      <div id = "projectIndex">
        <FilterBar />
        {
          this.projects()
        }
      </div>
    )
  }
})
