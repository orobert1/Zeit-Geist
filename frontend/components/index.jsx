const React = require('react');
const ReactDOM = require('react-dom');
const FixedBackground = require('./fixed_background');
const IndexBody = require('./index_body.jsx');
const Actions = require('../actions/sessionActions');
const UserStore = require('../stores/user_store');
const Cover = require( './cover' );
const ProjectIndex = require('./projectIndex');
const checkWindow = require('../util/checkWindow');
const Head = require('./head');
const $ = require('jquery');
const Index = React.createClass({
  getInitialState(){
    return({ user: {}, window: new checkWindow() })
  },

  componentDidMount(){
    window.addEventListener( "scroll", this.state.window.run.bind( this.state.window ) );
    Actions.checkCurrentUser();
    this.list = UserStore.addListener( this.__change );
  },

  __change(){

    let user = UserStore.currentUser();
    this.setState({ user: user })

  },

  cover(){
    if( !this.state.user.id ){
      let user = UserStore.currentUser();
      return( <Cover/> );
    }
  },

  render(){
    return(
      <div>
        {
          this.cover()
        }
        <Head user = { this.state.user } win = { this.state.window } />
        < ProjectIndex win = { this.state.window } />
      </div>
    );
  }
});

module.exports = Index;
