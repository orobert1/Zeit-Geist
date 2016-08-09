const React = require('react');
const ReactDOM = require('react-dom');
const ErrorStore = require('../stores/errors_store');
const Content = require('../stores/content_store');
const ImagesStore = require('../stores/images_store');
const ProjectActions = require('../actions/project_actions');
const CoverImageChoice = require('./cover_image_choice');




module.exports = React.createClass({
  getInitialState(){
    return({project: Content.getProject(), images: []});
  },

  componentDidMount(){
    ProjectActions.getProjectImages(this.state.project.id);
    ImagesStore.addListener(this._change);
  },
  componentWillUnmount(){

  },
  _shit(){
    if(ErrorStore.getAllErrors>1){
      this.context.router.push('/create_new_project');
    }
  },

  _change(){

    this.setState({
      images: ImagesStore.getImages()
    });
  },
  populate(){
    if(this.state.images.length>0){
      return(
        this.state.images.map(function(el){
          return(
            <div className={el.id}>
              <CoverImageChoice key={el.id} id={el.id} url={el.url}></CoverImageChoice>
            </div>
          );
        })
      )
    }else{
      return(
        <div></div>
      );
    }
  },




  render(){
    Content
    return(
      <div className = "new-project-all" onClick={this.check}>
        <main className = "new-project-canvas">
          <div className = "new-project-content">
            <div className="centered-cover-photos">
              <h1 className="cover-photos-header">Please Choose a Cover Photo</h1>
              {this.populate()}
            </div>
          </div>
        </main>
      </div>
    );
  }

});
