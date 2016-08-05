const React = require('react');
const ReactDOM = require('react-dom');
const ImageStore = require('../stores/image_store');

module.exports = React.createClass({
  getInitialState(){
      return ({image: null, imageUrl: null});
  },
  getImage(e){
    var image = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = function(){
      this.setState({ image: image, imageUrl: fileReader.result });
      this.addtoImageStore();
    }.bind(this);

    if(image){
      fileReader.readAsDataURL(image);
    }
  },
  addtoImageStore(){
    ImageStore.addImage({url: this.state.imageUrl,image: this.state.image, type: "image"});
  },
  insertImage(){
    if(this.state.image){
      return (
        <img src = {this.state.imageUrl} className="create-project-resized-image"></img>
      );
    }else{
      return(
        <img></img>
      );
    }
  },
  render(){
    return(
      <label className="image-object" htmlFor={"imageUpload"+this.props.id}>
        {this.insertImage()}
        <input className="transparent" id= {"imageUpload"+this.props.id} type = "file" onChange={this.getImage}></input>
      </label>
    );
  }
});
