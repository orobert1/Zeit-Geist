const React = require('react');
const ReactDOM = require('react-dom');
const ProjectActions = require('../actions/project_actions');
const $ = require('jquery');

module.exports = React.createClass({
  componentWillReceiveProps(){
    if( this.props.pane === true ){
      this.pad();
      this.shuffle();
    }
  },

  shuffle(){
    let img = $(document.getElementById( `absoluteImg${this.props.index}`));
    let targ = $(document.getElementById( "targetItem" + this.props.index ));
    $(img).css({ transition: "1s", top: targ.position().top, left: targ.position().left, width: targ.width(), height: targ.height(), marginTop: targ.css( 'margin-top' ), marginLeft: targ.css( 'margin-left' ), paddingRight: targ.css( 'padding-right' ), padding: targ.css( 'padding' ) });

  },


  aspectBuffer(){
    this.aspect();
  },

  componentWillUnmount(){

  },

  aspect(){
      let cont = document.getElementById( "targetItem" + this.props.index );
      let img = $( cont ).children('img');
      let aspect = img.width() / img.height();
      img.css({ width: "auto" });


      if( this.props.index > 0 ){
        let lastItem = $(document.getElementById( "targetItem" + ( this.props.index - 1 ) ));
        let thisItem = $( cont )
        // if( thisItem.position().top !== lastItem.position().top ){
        //   let remainder = window.innerWidth - ( lastItem.position().left + lastItem.width() );
        //   lastItem.css({ transition: "s", padding: "20px", paddingRight: remainder - 22 + "px", height: "200px", marginTop: "-10px" });
        // }
      }
      this.appendAbsolute();

  },

  appendAbsolute(  ){
    window.setTimeout(
      function(){
        let img = document.createElement("img");
        let targ = $(document.getElementById( "targImg" + this.props.index ));
        img.id = "absoluteImg" + this.props.index;
        img.onclick = this.click;
        img.src = this.props.element.project.cover_image;
        img.className = "absoluteImg";
        document.getElementById("absoluteContainer").appendChild( img );
        $(img).css({ top: targ.position().top, left: targ.position().left, width: targ.width(), height: targ.height(), marginTop: targ.css( 'margin-top' ), paddingRight: targ.css( 'padding-right' ), padding: targ.css( 'padding' ) });
        let dropoff = 1200;
        if( ( this.props.index + 1) * 200 <  dropoff ){
          $(img).fadeIn( ( this.props.index + 1) * 200 );
        }else{
          $(img).fadeIn( dropoff );
        }
      }.bind( this ), (200)
    )

  },

  pad(){
    if( this.props.index > 0 ){
      let cont = document.getElementById( "targetItem" + this.props.index );
      let lastItem = $(document.getElementById( "targetItem" + ( this.props.index - 1 ) ));
      let thisItem = $( cont )
      // if( thisItem.position().top !== lastItem.position().top ){
      //   let remainder = $('index').width() - ( lastItem.position().left + lastItem.width() );
      //   lastItem.css({ transition: "s", padding: "20px", paddingRight: remainder - 22 + "px", height: "200px", marginTop: "-10px" });
      // }
    }
  },

  padLast( lastItem, remainder ){
    lastItem.css({ padding: "20px", paddingRight: remainder - 22 + "px", height: "200px", marginTop: "-10px" });
  },

  click(){
    ProjectActions.getProject( this.props.element.project.id );
  },

  render(){
    return(
      <div className = { "targetItem" } id = { "targetItem" + this.props.index } >
        <img src = {this.props.element.project.cover_image} className = "indexCover" onLoad = { this.aspectBuffer } id = { "targImg" + this.props.index } />
      </div>
    )
  }
});
