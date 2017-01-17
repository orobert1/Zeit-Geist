const React = require('react');
const ReactDOM = require('react-dom');
const SessionActions = require('../actions/sessionActions');
const checkWindow = require('../util/checkWindow');
const UserStore = require('../stores/user_store');
const ProjectActions = require('../actions/project_actions');
const Head = require('./head');
const ProjectStore = require('../stores/project_store');
const UserActions = require('../actions/user_actions')
const IndexItem = require( './indexItem' );
const ProjectViewPane = require('./projectViewPane');
const HomeButton = require('./home_button');
const absoluteProjects = require('../util/absoluteProject');

const $ = require('jquery');

module.exports = React.createClass({
  getInitialState(){
    return({ user: {}, projects: {}, absoluteProjects: new absoluteProjects(), project: {} });
  },

  componentDidMount(){
    ProjectActions.removeProject();
    let payload = {
      userId: this.props.params.userId
    }
    ProjectActions.getAllProjects( payload );
    this.projectListener = ProjectStore.addListener( this.__updateProjects );
    UserActions.getUser( this.props.params.userId );
    this.userListener = UserStore.addListener( this.__getUser );
    $(window).resize(this.state.absoluteProjects.shuffleAll.bind( this.state.absoluteProjects ));
  },

  componentWillUnmount(){
    ProjectStore.removeProject();
    this.projectListener.remove();
    this.userListener.remove();
  },

  __updateProjects(){
    let projects = ProjectStore.getAllProjects();
    let randomProject = projects[Math.floor( Math.random() * ( projects.length - 1))]
    $('.profilePicture').css({ backgroundImage: `url(${ randomProject.project.cover_image})` })
    this.setState({ projects: projects });
  },

  __getUser(){
    let user = UserStore.getUserPage();
    this.setState({ user: user });
  },

  viewPane(){
    if( this.state.project.cover ){
      return <ProjectViewPane project = { this.state.project }/>
    }
  },

  projects(){
    if( this.state.projects.length > 0 ){
      this.state.absoluteProjects.registerProjectLength( this.state.projects.length );
      return this.state.projects.map(function( el, index ){
        return (
          <IndexItem element = {el}
            index = { index }
            absolute = { this.state.absoluteProjects }
            key = { index } />
        )
      }.bind(this))
    }
  },

  render(){
    return(
      <div>
        <HomeButton/>
        <div className = "profilePicture">
          <div className = "profileUserName"> { this.state.user.username } </div>
        </div>
        <div className = "userProjectCanvas">
          <div className = "userProjectContainer">
            {
              this.projects()
            }
          </div>
        </div>
        {
          this.viewPane()
        }
      </div>
    )
  }
})
