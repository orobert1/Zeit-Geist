const React = require('react');
const ReactDOM = require('react-dom');
const ProjectActions = require('../actions/project_actions');
const ContentStore = require('../stores/content_store');
module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  choose(){
    debugger
    let fnc = this.context.router.push;
    let data = ContentStore.getProject();
    data.cover_image = this.props.url
    ProjectActions.updateCoverPhoto(data, this._change);
  },
  _change(project){
    ContentStore.setProject(project);
    this.context.router.push('cover-crop/'+project.id);
  },

  render(){

    return(
      <div className ="cover-image-choice">
        <img onClick={this.choose} className = "cover-image-choice-image" src={this.props.url}></img>
      </div>
    );
  }

});
