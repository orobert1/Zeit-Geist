const React = require('react');
const ReactDOM = require('react-dom');
const IndexItem = require('./index_item');
const ContentStore = require('../stores/content_store');
const ProjectActions = require('../actions/project_actions');
const CropIndexItem = require('./crop_index_item');
module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState(){
    return({post: ContentStore.getProject()});
  },
  componentDidMount(){
    this.act = ContentStore.addListener(this._change);
    if(ContentStore.getProject().id && ContentStore.getProject().id === this.props.params.id){

    }else{
    }
  },

  submit(){
    ProjectActions.updateProject(this.state.post,this._save_and_reroute);
  },

  _save_and_reroute(data){
    this.context.router.push('/index');
  },
  _change(){
    this.setState({ post: ContentStore.getProject() });
  },
  changeMarginTop(e){
    let newProject = this.state.post;
    newProject.margin_top = (-e.target.value*(this.state.post.height));
    this.setState({post: newProject});
  },
  changeHeight(e){
    let newProject = this.state.post;
    newProject.height = e.target.value;
    this.setState({post: newProject});
  },
  changeMarginLeft(e){
    let newProject = this.state.post;
    newProject.margin_left = (-e.target.value*(this.state.post.height));
    this.setState({post: newProject});
  },

  render(){
    return(
      <div className="center-for-crop">
        <div className="margin-crop-top">
          <CropIndexItem el={this.state.post}/>
          <label className="range-slider">
            <center>Height</center> <br/>
            <input type="range" min="400" max="1600" step="1" onChange={this.changeHeight}/>
          </label>
          <label className="range-slider">
            <center>Position Y:</center> <br/>
            <input type="range" min="0" max=".9" step=".05" onChange={this.changeMarginTop}/>
          </label>
          <label className="range-slider">
            <center>Position X:</center> <br/>
            <input type="range" min="0" max="1" step=".05" onChange={this.changeMarginLeft}/>
          </label>
          <button className="crop-cover-submit" onClick={this.submit}>Submit</button>
        </div>
      </div>
  )
  }
});
