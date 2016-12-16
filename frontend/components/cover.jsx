const React = require('react');
const ReactDOM = require('react-dom');
const Grid = require('../util/grid');

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentDidMount(){
    let coverContainer = document.getElementById('coverContainer');
    let coverBackground = document.getElementById('coverBackground');
    let coverTitle = document.getElementById('coverTitle');
    let coverScroll = document.getElementById('coverScroll');
    let signIn = document.getElementById('signInButton');
    let signUp = document.getElementById('signUpButton');

    let grid = new Grid();
    grid.picHeight( coverBackground, 20 );
    grid.picHeight( coverContainer, 20 );
    grid.alignRight( coverTitle, 20 );
    grid.alignRight( coverScroll, 10 );
    grid.alignRight( signIn, 10 );
    grid.alignTop( signIn, 11 );
    grid.alignRight( signUp, 10 );
    grid.alignTop( signUp, 13 );




    this.interval = window.setInterval(function(){
      let cover = document.getElementById("coverContainer");
      let title = document.getElementById("coverTitle");
      let signIn = document.getElementById('signInButton');
      let signUp = document.getElementById('signUpButton');

      if( window.scrollY < window.innerHeight ){
          cover.style.height = window.innerHeight - window.scrollY + "px";
          title.style.top = window.scrollY / 10 + "px";
          signIn.style.top = 0 - ( window.scrollY / 4 ) + "px";
          signUp.style.top = 0 - ( window.scrollY / 2 ) + "px";
        }else{
          cover.style.height = "0px";
        }
    }.bind(this), 10);

  },

  componentWillUnmount(){
    window.clearInterval( this.interval );
  },

  signIn(){
    this.context.router.push('login');
  },

  signUp(){
    this.context.router.push('createUser');
  },

  render(){
    return(
      <div id = "coverContainer">
        <div id = "coverBackground">
        </div>
        <div id = "signInButton" onClick = { this.signIn } > Sign In </div>
        <div id = "signUpButton" onClick = { this.signUp } > Sign Up </div>
        <div id = "coverTitle">Zeit Geist</div>
        <div id = "coverScroll">Or Scroll</div>
      </div>
    )
  }
})
