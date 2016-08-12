const React = require('react');
const ReactDOM = require('react-dom');
const Link = require('react-router').Link;
const ImageObject = require('./create_image_object');
const ImageStore = require('../stores/content_store');
const TextObject = require('./create_text_object');
const ProjectActions = require('../actions/project_actions');
const currentUser = require('../stores/current_user_store');
const ChooseCover = require('./choose_cover');
module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState(){
      return ({ title: "", input: [{type: "image"}]});
  },
  componentDidMount(){

  },
  titleChange(e){
    this.setState({title: e.target.value});
  },
  createNewImageObject(){
    this.setState({
      input: this.state.input.concat([{type: "image"}])
    });

  },
  _goToChooseCover(){
    
    this.context.router.push("/choose_project_cover");
  },
  createNewTextObject(){
    this.setState({
        input: this.state.input.concat([{type: "text"}])
    });
  },
  submit(){
    ProjectActions.newProject({title:this.state.title, user_id: currentUser.current_user().id}, this._goToChooseCover);
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
            <h1 className="create-new-project-title">
              title
              <input type = "text" className="title-box" onChange={this.titleChange}/>
            </h1>

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
                <input type="submit" className="create-project-submit"/>
              </nav>
            </form>
          </ul>
        </main>
      </div>
    );
  }
});
