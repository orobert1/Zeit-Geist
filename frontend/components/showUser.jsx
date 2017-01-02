const React = require('react');
const ReactDOM = require('react-dom');
const SessionActions = require('../actions/sessionActions');
const checkWindow = require('../util/checkWindow');
const UserStore = require('../stores/user_store');
const Head = require('./head');
const $ = require('jquery');

module.exports = React.createClass({
  getInitialState(){
    return({ user: {}, window: new checkWindow(), project: {}, pane: false })
  },

  componentDidMount(){
    SessionActions.checkCurrentUser();
    UserStore.addListener( this.__change );
    window.addEventListener( "scroll", this.state.window.run.bind( this.state.window ) );
    this.showHead();
  },

  showHead(){
    let head = document.getElementById( "head" );
    head.style.height = "50px";
    head.style.opacity = 1;
  },

  __change(){

    let user = UserStore.currentUser();
    this.setState({ user: user });

  },

  render(){
    return(
    <div>
      <Head user = { this.state.user } win = { this.state.window } />
      {
        this.viewPane()
      }
      <ProjectIndex user = { this.state.user } win = { this.state.window } pane = { this.state.pane } />
    </div>
    )
  }
})
