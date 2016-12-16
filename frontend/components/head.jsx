const React = require('react');
const ReactDOM = require('react-dom');
const Grid = require('../util/grid')
const $ = require('jquery');
const SessionActions = require('../actions/sessionActions');



module.exports = React.createClass({
  user(){
    if( this.props.user.username ){
      return( this.props.user.username );
    }
  },

  componentDidMount(){
    let badge = document.getElementById( "currentUserBadge" );
    let grid = new Grid();
    grid.marginRight( badge, 2 );
  },

  logout(){
    SessionActions.logOutUser( this.reset );
  },

  reset(){
    let head = document.getElementById( "head" );
    head.style.height = "0px";
    head.style.opacity = 0;
    $( '.indexItem' ).css({ opacity: .05 });
    window.setTimeout( this.reApplyGuestListener.bind(this), 200 );
  },

  reApplyGuestListener(){
    this.props.win.registerElement( projectIndex, this.signInAsGuest );
  },

  signInAsGuest(){
    let head = document.getElementById( "head" );
    head.style.height = "50px";
    head.style.opacity = 1;

    $('html, body').animate({
        scrollTop: $("#projectIndex").offset().top
    }, 20);

    window.setTimeout(
      function(){
        let children = $('#projectIndex').children();
        children.css({ transition: "1s" });
        this.fadeIn( children );
      }.bind(this), 200
    )

    SessionActions.logInUser( {
      username: "Guest",
      password: "GuestPassword"
    });
  },

  fadeIn( children ){
    let child = children.splice( 0,1 )
    $( child[0] ).css({ opacity: 1 });
    if( children.length > 0 ){
      window.setTimeout( function(){
        this.fadeIn( children );
      }.bind(this) ,100 )
    }
  },

  profile(){

  },

  render(){
    return(
      <div id = "head">
        <div id = "currentUserBadge">
          {
            this.user()
          }
          <div className = "badgeMenu">
            <div id = "linkToProfile" onClick = { this.profile }>  Profile </div>
            <div id = "logOutButton" onClick = { this.logout }> Log Out </div>
          </div>
        </div>
      </div>
    )
  }
})
