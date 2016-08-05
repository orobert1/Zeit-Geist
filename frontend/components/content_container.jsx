const React = require('react');
const ReactDOM = require('react-dom');
const IndexItem = require('./index_item');

module.exports = React.createClass({
  getInitialState(){
    return({posts:30});
  },
  populate(){
    let result = [];
    for(var i = 0; i<this.state.posts;i++){
      result.push(i);
    }
    return result;
  },

  render(){
    return(
      <div className = "content-container">
        {
          this.populate().map(
            function(el){
              return ( <IndexItem key={el} className="index-item"/> );
            }
          )
        }
      </div>
    );
  }
});
