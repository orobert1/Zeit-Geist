const React = require('react');
const ReactDOM = require('react-dom');
const LinkToLogin = require('./link_to_login');
const Link = require('react-router').Link;
module.exports = React.createClass({
  render(){
    return(
      <div>
        <div className="head-fixed">
          <div className="head-image-container">
            <figure className="head-image"></figure>
            <div className="head-overlay"></div>
              <p className="centered-text">See What Its all about
                <Link to={"/new_user"} className="new-user fixed-new-user">Create New User</Link>
              </p>
          </div>
        </div>
    </div>
    );
  }
});
