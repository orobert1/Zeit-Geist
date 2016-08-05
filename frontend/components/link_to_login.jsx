const React = require('react');
const ReactDOM = require('react-dom');
const hashHistory = require('react-router').hashHistory ;
const Link = require('react-router').Link;


  module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  render(){
    return(
      <Link to={"/login"} className="logIn">Log In</Link>
    );
  }
});
