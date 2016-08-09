const React = require('react');
const ReactDOM = require('react-dom');
const ProjectActions = require('../actions/project_actions');
const ContentStore = require('../stores/content_store');
module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  choose(){
    ContentStore
    let fnc = this.context.router.push('/index');
    let data = ContentStore.getProject();
    data.cover_image = this.props.url
    ProjectActions.updateCoverPhoto(data, fnc);
  },

  render(){

    return(
      <div className ="cover-image-choice">
        <img onClick={this.choose} className = "cover-image-choice-image" src={this.props.url}></img>
      </div>
    );
  }

});
