const React = require('react');
const ReactDOM = require('react-dom');
const FixedBackground = require('./fixed_background');
const IndexBody = require('./index_body.jsx');
const Index = React.createClass({
  render(){
    return(
      <div>
        <FixedBackground/>
        <IndexBody/>

      </div>
    );
  }
});

module.exports = Index;
