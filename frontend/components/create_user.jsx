const React = require('react');
const ReactDOM = require('react-dom');
const userActions = require('../actions/user_actions');
const Link = require('react-router').Link;
const userStore = require('../stores/current_user_store');

module.exports = React.createClass({
contextTypes: {
  router: React.PropTypes.object.isRequired
},
getInitialState(){
  return ({username: "", password: ""});
},

updateUsername(e){
  this.setState({username: e.target.value});
},

updatePassword(e){
  this.setState({password: e.target.value});
},

submit(){
userActions.createUser({username: this.state.username, password:this.state.password});
  if(userStore.current_user){
    this.context.router.push("/index");
  }else{
    this.setState({username: "", password: ""});
  }
},

render(){
  return(
    <div className="log-in-container">
      <form onSubmit={this.submit}>
        <input type="text" value={this.state.username} onChange={this.updateUsername}></input>
        <input type="password" value={this.state.password} onChange={this.updatePassword}></input>
        <input type = "submit" className="new-user" value="Create Account"></input>
      </form>
    </div>
  );
}
});
