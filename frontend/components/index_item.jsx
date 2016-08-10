const React = require('react');
const ReactDOM = require('react-dom');

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  visitPage(){
    debugger
    this.context.router.push('show/'+this.props.el.id);
  },
  render(){

    if(this.props.el){
      var imgUrl = this.props.el.cover_image;
      var imgStyle = {
        height: this.props.el.height+"px",
        marginTop: this.props.el.margin_top+"px",
        marginLeft: this.props.el.margin_left+"px"
      }
    }
    return(
      <div className="index-item" onClick={this.visitPage}>
        <div className="cover-image">
          <img className="cover-image-crop" src={imgUrl} style={imgStyle}></img>
          <div className="cover-image-overlay"/>
          <div></div>
        </div>
        <div className="author-title"><strong>Created By ~ </strong>{this.props.user}</div>
      </div>
    );
  }
});
