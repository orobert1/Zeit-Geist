const React = require('react');
const ReactDOM = require('react-dom');

module.exports = React.createClass({
  removeSelf(){
    this.props.callback( this.props.el );
  },

  render(){
    return(
      <div className = "indivTagContainer" >
        <div className = "tag">
          {
            this.props.el
          }
        </div>
        <div className = "tagX" onClick = { this.removeSelf } >
          x
        </div>
    </div>
    )
  }
})
