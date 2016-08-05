const React = require('react');
const ReactDOM = require('react-dom');
const ContentContainer = require('./content_container');
const Sidebar = require('./sidebar');

module.exports = React.createClass({
  render(){
    return(
      <div className="index-page">
        <div className="margin-setter">
          <ContentContainer/>
          <Sidebar/>
        </div>
      </div>
    );
  }
});
