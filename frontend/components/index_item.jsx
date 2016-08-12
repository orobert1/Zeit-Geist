const React = require('react');
const ReactDOM = require('react-dom');
const Link = require('react-router').Link;

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  visitPage(){

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
      <div className={this.props.listener}>
      <div id={this.props.listener} className="index-item">
        <div className="cover-image" onClick={this.visitPage}>
          <img className="cover-image-crop" src={imgUrl} style={imgStyle}></img>
          <div className="cover-image-overlay">
          {this.props.el.title}
        </div>
        </div>
        <div className="author-title">
          <strong>
            Created By ~
          </strong>
          <Link to={"/profile/"+this.props.userId}>
            {this.props.user}
          </Link>
        </div>
      </div>
      </div>
    );
  }
});
