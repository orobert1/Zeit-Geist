const React = require('react');
const ReactDOM = require('react-dom');
const ContentStore = require('../stores/content_store');

module.exports = React.createClass({
  getInitialState(){
    return({ text: "" });
  },
  storeChange(e){
    this.setState({ text: e.target.value });
    ContentStore.addContent({id: this.props.id, text: this.state.text});
  },

  render(){
    return(
      <input type="textarea" onChange = {this.storeChange} value = {this.state.text}></input>
    );
  }
});
