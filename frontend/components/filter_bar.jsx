const React = require('react');
const ReactDOM = require('react-dom');

module.exports = React.createClass({
    render(){
      return (
        <nav className="filter-bar">
          <ul className="filter-options">
            <li className="filter-options-list-item">Category</li>
            <li className="filter-options-list-item">Category</li>
            <li className="filter-options-list-item">Category</li>

          </ul>
        </nav>
      );
    }
});
