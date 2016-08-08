const React = require('react');
const ReactDOM = require('react-dom');
const ErrorStore = require('../stores/errors_store');
const Project = require('../stores/project_store');
module.exports = React.createClass({
  getInitialState(){
    return({project: Project.getCurrentProject(), content: Project.getProjectContent()});
  },

  componentDidMount(){
    ErrorStore.addListener(this._shit);
    Project.addListener(this._change);
  },

  _shit(){
    if(ErrorStore.getAllErrors>1){
      this.context.router.push('/create_new_project');
    }
  },

  _change(){
    this.setState({
      project: Project.getCurrentProject(),
      content: Project.getProjectContent()
    });
  },




  render(){
    Project
    debugger
    return(
      <div>{this.state.Project}</div>
    );
  }

});
