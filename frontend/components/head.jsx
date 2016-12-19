const React = require('react');
const ReactDOM = require('react-dom');
const Grid = require('../util/grid')
const $ = require('jquery');
const SessionActions = require('../actions/sessionActions');



module.exports = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentDidMount(){

    let badge = document.getElementById( "currentUserBadge" );
    let grid = new Grid();
    grid.marginRight( badge, 2 );

  },

  user(){

    if( this.props.user.username ){
      return( this.props.user.username );
    }

  },

  logout(){

    SessionActions.logOutUser( );
    this.context.router.push('/index')
    window.setTimeout(function(){
      window.scrollTo( 0, 0)
      location.reload(true)
    }, 100);

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

  navHome(){
    this.context.router.push('/index')
  },

  render(){
    return(
      <div id = "head">
        <div id = "homeButton" onClick = { this.navHome }> Home </div>
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
