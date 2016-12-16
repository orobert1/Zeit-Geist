const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');

module.exports = React.createClass({
  aspectBuffer(){
    window.setTimeout( this.aspect.bind(this), this.props.index * 100 );

  },

  timer(){
    window.setTimeout( this.fadeIn(), 100 );
  },

  fadeIn(){

    let item = document.getElementById("indexItem" + this.props.index);
    $( item ).css({ transition: "1s", opacity: 1 });

  },

  aspect(){
      let cont = document.getElementById( "indexItem" + this.props.index );
      let img = $( cont ).children('img');
      let aspect = img.width() / img.height();
      if( aspect > 1 ){
        img.css({ width: "auto" });
      }else{
        img.css({ height: "auto" });
      }
      if( this.props.index > 0 ){
        let lastItem = $(document.getElementById( "indexItem" + ( this.props.index - 1 ) ));
        let thisItem = $( cont )
        if( thisItem.position().top !== lastItem.position().top ){
          let remainder = window.innerWidth - ( lastItem.position().left + lastItem.width() );
          lastItem.css({ transition: "0s", padding: "20px", paddingRight: remainder - 22 + "px", height: "200px", marginTop: "-10px" });
        }
      }
      if( this.props.fade ){
        this.timer();
      }
  },

  render(){
    return(
      <div className = { "indexItem" } id = { "indexItem" + this.props.index } >
        <img src = {this.props.element.project.cover_image} className = "indexCover" onLoad = { this.aspectBuffer } />
      </div>
    )
  }
});
