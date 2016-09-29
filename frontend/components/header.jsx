const React = require('react');
const ReactDOM = require('react-dom');
const CurrentUserStore = require('../stores/current_user_store');
const SessionActions = require('../actions/sessionActions');
const LinkToLogOut = require('./link_to_logout');
const LinkToLogin = require('./link_to_login');
const Link = require('react-router').Link;

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState(){
    return({logged_in: CurrentUserStore.current_user()});
  },
  componentDidMount(){
    this.act = CurrentUserStore.addListener(this._change);
    SessionActions.checkCurrentUser();

  },

  _change(){
    this.setState({logged_in: CurrentUserStore.current_user()});
  },
  determineButton(){
    if(CurrentUserStore.current_user().id){
      return (
        <div className="header-dropdown">
          <p className="header-droppdow-inner-text">
            {this.state.logged_in.username}
          </p>
          <ul className="hidden-dropdown">
            <li>
              <Link to={"/profile/"+CurrentUserStore.current_user().id}>Profile</Link>
            </li>
            <li>
              <LinkToLogOut/>
            </li>
          </ul>
        </div>
      );
    }else if(this.context.router.isActive('/login')){
    }else{
      return (<LinkToLogin/>);
    }
  },

  createProject(){
    this.context.router.push('/create_new_project');
  },

  render(){

    let logInButton = this.determineButton();

    return(
    <div className="header">
      <Link to={"/index"} className="logo"></Link>
      {logInButton}
      <nav className="nav-wrap">
      <button className="new-project" onClick={this.createProject}>Create New Project</button>
      </nav>

    </div>
    );
  }
});
