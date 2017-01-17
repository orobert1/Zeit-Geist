const React = require( 'react' );
const UserActions = require( '../actions/user_actions' );

module.exports = React.createClass({
  getInitialState(){
    return({username: "", password:""});
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
    UserActions.createUser( {
      username: this.state.username,
      password: this.state.password
    } );
  },
  render(){
    return(
      <div className = "logInPage">
        <div className="logInContainer">
          <form onSubmit={this.submit}>
            <div className = "logInLabel" > Username </div>
            <input className = "userNameText" type="text" value={this.state.username} onChange={this.updateUsername} ></input>
            <div className = "logInLabel" > Password </div>
            <input className = "userNameText" type="password" value={this.state.password} onChange={this.updatePassword} ></input>
            <input className = "logInLabel"type = "submit" className="signIn" value="Sign In" ></input>
          </form>
        </div>
      </div>
    )
  }
});
