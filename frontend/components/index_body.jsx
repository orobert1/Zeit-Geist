const React = require('react');
const ReactDOM = require('react-dom');
const FilterBar = require('./filter_bar');
const IndexContent = require('./index_content');

module.exports = React.createClass({
    render(){
      return (
        <div>
          <FilterBar/>
          <IndexContent/>
        </div>
      );
    }
});
