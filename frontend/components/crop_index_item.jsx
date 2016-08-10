const React = require('react');
const ReactDOM = require('react-dom');

module.exports = React.createClass({
  render(){
    if(this.props.el){
      var imgStyle = {
        height: this.props.el.height+"px",
        marginTop: this.props.el.margin_top+"px",
        marginLeft: this.props.el.margin_left+"px"
      }
    }
    return(
      <div className="index-item">
        <div className="cover-image">
          <img className="cover-image-crop" src={this.props.el.cover_image} style={imgStyle}></img>
          <div className="cover-image-overlay"/>
          <div></div>
        </div>
        <div className></div>
      </div>
    );
  }
});
