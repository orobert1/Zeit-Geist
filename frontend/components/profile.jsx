const React = require('react');
const ReactDOM = require('react-dom');
const UserStore = require('../stores/user_store');
const UserActions = require('../actions/user_actions');
module.exports = React.createClass({
  getInitialState(){
    return({ user: {} });
  },
  componentDidMount(){
    this.act = UserStore.addListener(this._change);
    UserActions.getUser(this.props.params.userId);
  },

  componentDidUnount(){
    UserStore.remove(this.act);
  },
  _change(){
    this.setState({user: UserStore.find(this.props.params.userId)});
  },
  render(){
    return(
      <div className="profile-content-container">
        <div className="profile-user-side-menu">
          <h3>
            { this.state.user.username }
          </h3>
        </div>
        <div className="profile-projects">

        </div>
      </div>
    );
  }
});
