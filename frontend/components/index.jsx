const React = require('react');
const ReactDOM = require('react-dom');
const FixedBackground = require('./fixed_background');
const IndexBody = require('./index_body.jsx');
const SessionActions = require('../actions/sessionActions');
const UserStore = require('../stores/user_store');
const Cover = require( './cover' );
const ProjectIndex = require('./projectIndex');
const ProjectStore = require('../stores/project_store');
const checkWindow = require('../util/checkWindow');
const Head = require('./head');
const FilterBar = require('./filterBar');
const ProjectViewPane = require('./projectViewPane');
const CreateProject = require('./createProject.jsx');
const $ = require('jquery');
const Index = React.createClass({
  getInitialState(){
    return({ user: {}, window: new checkWindow(), project: {}, pane: false, createProject: false })
  },



  componentDidMount(){
    this.projectIndex = document.getElementById('projectIndex');
    this.state.window.registerElement( projectIndex, this.signInAsGuest );
    window.addEventListener( "scroll", this.state.window.run.bind( this.state.window ) );
    SessionActions.checkCurrentUser();
    this.list = UserStore.addListener( this.__change );
    this.projectList = ProjectStore.addListener( this.__changeProject );
  },

  __changeProject(){
    let project = ProjectStore.getProject();
    let createProject = ProjectStore.getProjectCreationStatus();
    if( createProject ){
      this.slideToTheLeft();
      project = {};
    }else{
      if( project.cover ){
        this.slideToTheLeft();
        this.setState({ pane: true });
      }else{
        this.slideToTheRight();
        this.setState({ pane: false });
      }
    }
    this.setState({ project: project, createProject: createProject })
  },

  showHead(){
    let head = document.getElementById( "head" );
    head.style.height = "50px";
    head.style.opacity = 1;
  },

  changePane(){
    this.setState({ pane: false });
  },

  signInAsGuest(){
    this.showHead();

    $('html, body').animate({
        scrollTop: $("#projectIndex").offset().top
    }, 20);

    SessionActions.logInUser( {
      username: "Guest",
      password: "GuestPassword"
    });
  },

  __change(){
    let user = UserStore.currentUser();
    if( user && user.username ){
      this.showHead();
      this.state.window.unRegisterElement( this.projectIndex );
    }

    this.setState({ user: user })

  },

  cover(){

    if( !this.state.user.id ){
      let user = UserStore.currentUser();
      return( <Cover/> );
    }
  },

  viewPane(){
    if( this.state.project.cover ){
      return <ProjectViewPane project = { this.state.project }/>
    }else if (this.state.createProject) {
      return <CreateProject></CreateProject>
    }
  },

  slideToTheLeft(){
    $('#projectIndex').css({ width: "55%" });
  },

  slideToTheRight(){
    $('#projectIndex').css({ width: "100%" });
  },

  render(){

    return(
      <div id = "index">

        {
          this.cover()
        }

        <Head user = { this.state.user } win = { this.state.window } />
        {
          this.viewPane()
        }
        <ProjectIndex user = { this.state.user } win = { this.state.window } pane = { this.state.pane } />

      </div>
    );
  }
});

module.exports = Index;
