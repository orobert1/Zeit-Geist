const React = require('react');
const ReactDOM = require('react-dom');
const ContentStore = require('../stores/content_store');

module.exports = React.createClass({
  getInitialState(){
      return ({image: null, imageUrl: null});
  },
  componentWillMount(){
  },
  getImage(e){
    var image = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = function(){
      this.setState({ image: image, imageUrl: fileReader.result });
      ContentStore.addContent({id: this.props.id, image: this.state});
    }.bind(this);

    if(image){
      fileReader.readAsDataURL(image);
    }
  },
  addtoImageStore(){
    ContentStore.addImage({id: this.props.id, url: this.state.imageUrl,image: this.state.image, type: "image"});
  },
  insertImage(){
    if(this.state.image){
      return(
      <img id = {this.props.id} onLoad={this.checkPortrait} src = {this.state.imageUrl}></img>
    );
    }else{
      return(
        <img></img>
      );
    }
  },
  checkPortrait(){
    var aspect_ratio = $(`#${this.props.id}`).width()/$(`#${this.props.id}`).height();
    var container_ratio = 800/500;
    if(aspect_ratio < container_ratio){
      $(`#${this.props.id}`).addClass("create-project-resized-image-height");
    }else{
      $(`#${this.props.id}`).addClass("create-project-resized-image-width");
    }

  },
  render(){
    ContentStore
    return(
      <label className="image-object" htmlFor={"imageUpload"+this.props.id}>
        {this.insertImage()}
        <input className="transparent" id= {"imageUpload"+this.props.id} type = "file" onChange={this.getImage}></input>
      </label>
    );
  }
});
