const React = require('react');
const ReactDOM = require('react-dom');
const Link = require('react-router').Link;
const ImageObject = require('./create_image_object');
const ImageStore = require('../stores/content_store');
const TextObject = require('./create_text_object');



module.exports = React.createClass({

  getInitialState(){
      return ({ input: [{type: "image"}]});
  },
  createNewImageObject(){
    this.setState({
      input: this.state.input.concat([{type: "image"}])
    });

  },
  createNewTextObject(){
    this.setState({
        input: this.state.input.concat([{type: "text"}])
    });
  },
  submit(){
    alert(ImageStore.allImages());
  },
  render(){
    return(
      <div className = "new-project-all">
        <main className = "new-project-canvas">
          <div className = "new-project-sidebar">
            <h1 className = "new-project-list-item-header">Add New Project Elements</h1>
            <li>
              <button onClick={this.createNewTextObject}> Text </button>
            </li>
            <li>
              <button onClick={this.createNewImageObject}>Image</button>
            </li>
            <li>
              <button>URL</button>
            </li>
          </div>
          <ul className = "new-project-content">
            <form onSubmit={this.submit}>
              {
                this.state.input.map(function(el, i){
                  switch(el.type){
                    case "image":
                    return (<ImageObject key={i} id={i}/>);
                    case "text":
                    return (<TextObject key={i} id={i}/>);

                  }
                })
              }
              <nav className="project-submit-nav">
                <input type="submit" className="create-project-submit">  </input>
              </nav>
            </form>
          </ul>
        </main>
      </div>
    );
  }
});
