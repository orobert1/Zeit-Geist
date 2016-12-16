const React = require('react');
const ReactDOM = require('react-dom');
const FilterBar = require('./filterBar');
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
