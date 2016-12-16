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
    let projectIndex = document.getElementById('projectIndex');
    let grid = new Grid();
    grid.alignTop( projectIndex, 0 );
    grid.picHeight( projectIndex, 20 );
    this.props.win.registerElement( projectIndex, this.signInAsGuest );
    let list = SessionStore.addListener( this.__change );
    let projList = ProjectStore.addListener( this.__projChange );

  },

  __change(){
    let user = SessionStore.currentUser();
    this.setState({ user: user });
    ProjectActions.getAllProjects( { user: user } );
  },

  __projChange(){
    let projects = ProjectStore.getAllProjects();
    this.setState({ projects: projects });
  },

  getInitialState(){
    return({ user: {}, projects: {}, break: false });
  },

  signInAsGuest(){
    let head = document.getElementById( "head" );
    head.style.height = "50px";
    head.style.opacity = 1;

    $('html, body').animate({
        scrollTop: $("#projectIndex").offset().top
    }, 20);

    window.setTimeout(
      function(){
        this.setState({ break: true });
        let children = $('#projectIndex').children();
        children.css({ transition: "1s" });
        this.fadeIn( children );
      }.bind(this), 200
    )

    SessionActions.logInUser( {
      username: "Guest",
      password: "GuestPassword"
    });
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
    if( this.state.projects.length ){
      return this.state.projects.map(function( el, index ){
        return (
          <IndexItem element = {el}
            index = {index}
            fade = { this.state.break }
            key = {index} />
        )
      }.bind(this))
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
