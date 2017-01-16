const React = require('react');
const ReactDOM = require('react-dom');
const Grid = require('../util/grid');

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentDidMount(){
    let coverContainer = document.getElementById("coverContainer");
    let here = document.getElementById("here");
    let nose = this.id( "nose" );
    let latRectPiv = this.name("latRectPiv");
    let redClusterPivot2 = this.name("redClusterPivot2");
    let redClusterPivot = this.name("redClusterPivot");
    coverContainer.style.height = window.innerHeight + "px";
    let hand = this.name("dadaHand");
    let mouth = this.name("dadaMouth");
    let black = this.name("blackThinRectPiv");

    this.style( hand, "opacity", 1, 1200 );
    this.style( mouth, "opacity", 1, 1600 );

    this.style( black, "transform", "translate(5vw, 22vw) rotate(-60deg)", 200);

    this.style( nose, "marginTop", "0vw", 800 );
    this.style( nose, "opacity", "1", 800 );


  },

  style( div, styling, value, timeout ){
    window.setTimeout(
      function(){
        div.style[styling] = value
      }, timeout
    )
  },

  id( string ){
    return document.getElementById(string);
  },

  name( string ){
    return document.getElementsByClassName(string)[0];
  },

  signIn(){
    this.context.router.push('login');
  },

  signUp(){
    this.context.router.push('createUser');
  },

  logInGuest(){
    $('html, body').animate({
        scrollTop: $("#projectIndex").offset().top + 1
    }, 200)
  },

  render(){
    return(
      <div id = "coverContainer" className = "trans">
        <div id = "squareOne" className = "trans">
          <div className = "floatLeft trans">
            <div className = "corner trans">
              <div className = "floatLeft trans">
                <div className = "biggerCircle round trans"></div>
                <div className = "pivot latRectPiv trans">
                  <div className = "lateralRect red shadow trans">
                    <div className = "mayaFrame2"></div>
                    <div className = "pivot blackThinRectPiv trans">
                      <div className = "mayaFrame"></div>
                      <div className = "blackThinRect trans"></div>
                    </div>
                    <div className = "pivot redClusterPivot trans">
                      <div className = "redCluster red shadow trans"></div>
                      <div className = "redCluster red cluster1 shadow trans"></div>
                      <div className = "redCluster red cluster2 shadow trans"></div>
                        <div className = "pivot redClusterPivot2 trans">
                          <div className = "redCluster red cluster3 shadow trans"></div>
                          <div className = "redCluster red shadow trans"></div>
                          <div className = "redCluster red cluster4 shadow trans">
                            <div className = "pivot dadaPivot">
                              <div className = "dadaHand trans">
                                <div className = "dadaMouth trans">
                                  <div className = "coverTitle trans"></div>
                                  <div className = "logIn trans" onClick = { this.signIn }>Log In</div>
                                  <div className = "signUp trans" onClick = { this.signUp } >Sign Up</div>
                                  <div className = "here trans" onClick = { this.logInGuest } >Click Here!</div>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div className = "cornerCircle round red shadow trans"></div>
              </div>
            </div>
            <div id = "squareTwo" className = "trans"></div>
          </div>
          <div id = "nose" className = "trans"></div>
        </div>
      </div>
    )
  }
})
