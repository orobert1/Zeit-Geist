const React = require('react');
const ReactDOM = require('react-dom');
const IndexItem = require('./index_item');

module.exports = React.createClass({
  getInitialState(){
    return({posts:[], max:30});
  },
  componentDidMount(){
    
  },
  populate(){
    let result = [];
    for(var i = 0; i<this.state.max;i++){
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
