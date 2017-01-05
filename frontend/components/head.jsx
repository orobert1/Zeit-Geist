const React = require('react');
const ReactDOM = require('react-dom');
const Grid = require('../util/grid')
const $ = require('jquery');
const SessionActions = require('../actions/sessionActions');
const ProjectActions = require('../actions/project_actions');
const FilterBar = require('./filterBar');
const Tags = require('./tags');


module.exports = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  user(){

    if( this.props.user.username ){
      return( this.props.user.username );
    }

  },

  componentWillReceiveProps( newProps ){
    this.setState({ menu: newProps.menu, project: newProps.project });
  },

  logout(){

    SessionActions.logOutUser( );
    this.context.router.push('/index')
    window.setTimeout(function(){
      window.scrollTo( 0, 0)
      location.reload(true)
    }, 100);

  },

  fadeIn( children ){

    let child = children.splice( 0,1 )
    $( child[0] ).css({ opacity: 1 });
    if( children.length > 0 ){
      window.setTimeout( function(){
        this.fadeIn( children );
      }.bind(this) ,100 )
    }
    if( this.state.project.cover ){
      ProjectActions.removeProject();
    }

  },

  tagging(){
    if( this.context.router.isActive('/') || this.context.router.isActive('/index') ){
      return(
        <Tags/>
      )
    }
  },

  navHome(){
    this.context.router.push('/index')
  },

  getFilter(){

  },

  menu(){
    if( this.state.menu ){
      this.props.hide();
    }else{
      this.props.show();
    }
  },

  addProject(){
    ProjectActions.triggerProjectCreationPane();
  },

  render(){
    return(
      <div id = "head">
        <FilterBar/>
        <div id = "hamburger" onClick = { this.menu } >
          <div className = "bun"/>
          <div className = "bun"/>
          <div className = "bun"/>
        </div>
      </div>
    )
  }
})
