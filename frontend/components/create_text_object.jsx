const React = require('react');
const ReactDOM = require('react-dom');
const ContentStore = require('../stores/content_store');

module.exports = React.createClass({
  getInitialState(){
    return({ text: "" });
  },
  storeChange(e){
    this.setState({ text: e.target.value });
    ContentStore.addContent({id: this.props.id, text: e.target.value});
  },

  render(){
    return(
      <div className="centered-text-object">
        <textarea className="project-submit-text-area" onChange = {this.storeChange} value = {this.state.text}></textarea>
      </div>
    );
  }
});
