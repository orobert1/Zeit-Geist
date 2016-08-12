const React = require('react');
const ReactDOM = require('react-dom');
const ProjectActions = require('../actions/project_actions');
const ContentStore = require('../stores/content_store');
const ImageStore = require('../stores/images_store');

module.exports = React.createClass({
  getInitialState(){
    return({project: "", images: ""})
  },
  componentDidMount(){

    if(this.state.project){
      ProjectActions.getProjectImages(this.props.params.projectId);
    }else{
      ProjectActions.getProject(this.props.params.projectId);
      ProjectActions.getProjectImages(this.props.params.projectId);
    }
    this.act = ImageStore.addListener(this.__change);
    this.other_act = ContentStore.addListener(this.__change);
  },
  componentWillUnmount(){
    this.act.remove();
    this.other_act.remove();
  },
  __change(){
    this.setState({project: ContentStore.getProject(), images: ImageStore.getImages()});
  },

  render(){

    let population = '';
    if(this.state.images.length>0){
      population = this.state.images.map(function(el){
        return(<img key={el.id} src={el.url}/>);
      })
    }else{
      population = <div/>;
    }

    return(
      <div className = "new-project-all">
        <main className = "new-project-canvas">
          <ul className = "new-project-content">
            <h1 className="create-new-project-title">
              <center>{this.state.project.title}</center>
            </h1>
            {
              population
            }
          </ul>
        </main>
      </div>
    );
  }
});
