const React = require('react');
const ReactDOM = require('react-dom');
const Link = require('react-router').Link;
const ImageObject = require('./create_image_object');



module.exports = React.createClass({

  getInitialState(){
      return ({ input: [<ImageObject key={1} id={1}></ImageObject>], project_index: 2});
  },
  createNewImageObject(){
    this.setState({
      input: this.state.input.concat([<ImageObject key={this.state.project_index}/>]),
      project_index: this.state.project_index+1
    });
  },
  render(){
    return(
      <div className = "new-project-all">
        <main className = "new-project-canvas">
          <div className = "new-project-sidebar">
            <h1 className = "new-project-list-item-header">Add New Project Elements</h1>
            <li>
              <button> Text </button>
            </li>
            <li>
              <button onClick={this.createNewImageObject}>Image</button>
            </li>
            <li>
              <button>URL</button>
            </li>
          </div>
          <ul className = "new-project-content">
            <form>
              {
                this.state.input.map(function(el){
                  return el;
                })
              }
            </form>
          </ul>
        </main>
      </div>
    );
  }
});
