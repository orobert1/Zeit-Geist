const React = require('react');
const ReactDOM = require('react-dom');
const CurrentUserStore = require('../stores/current_user_store');
const SessionActions = require('../actions/sessionActions');
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
    SessionActions.logInUser( {
      username: this.state.username,
      password: this.state.password
    } );
    window.setTimeout(function(){
      this.context.router.push('/index');

    }.bind( this ), 200);

  },


  render(){
    return(
      <div className="log-in-container">
        <form onSubmit={this.submit}>
          <div className = "loginLabel" > Username </div>
          <input type="text" value={this.state.username} onChange={this.updateUsername} className = "username" ></input>
          <div className = "loginLabel" > Password </div>
          <input type="password" value={this.state.password} onChange={this.updatePassword}  className = "password"></input>
          <input type = "submit" className="sign-in" value="Sign In" ></input>
        </form>
        <Link to={"/new_user"} className="new-user">Create New User</Link>
      </div>
    );
  }
});
