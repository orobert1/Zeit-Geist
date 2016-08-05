const React = require('react');
const ReactDOM = require('react-dom');
const CurrentUserStore = require('../stores/current_user_store');
const sessionActions = require('../actions/sessionActions');
const Link = require('react-router').Link;

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState(){
    return({username: "", password:""});
  },
  componentDidMount(){

  },
  updatePassword(e){
    this.setState({password: e.target.value});
  },
  updateUsername(e){
    this.setState({username: e.target.value});
  },
  submit(){
    sessionActions.logInUser({username: this.state.username,
    password: this.state.password});
    if(CurrentUserStore.current_user){
      this.context.router.push("/index");
    }else{

    }
  },
  render(){
    return(
      <div className="log-in-container">
        <form onSubmit={this.submit}>
          <input type="text" value={this.state.username} onChange={this.updateUsername}></input>
          <input type="password" value={this.state.password} onChange={this.updatePassword}></input>
          <input type = "submit" className="sign-in" value="Sign In"></input>
        </form>
        <Link to={"/new_user"} className="new-user">Create New User</Link>
      </div>
    );
  }
});
