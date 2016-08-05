const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory ;
const SessionActions = require('../actions/sessionActions');


  module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  logOut(){
    SessionActions.logOutUser();
    this.context.router.push("/login");

  },
  render(){
    return(
      <button onClick={this.logOut}>Log Out</button>
    );
  }
});
