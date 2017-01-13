const React = require('react');

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  click(){
    this.context.router.push('/index');
  },

  render(){
    return(
        <div className = "homeButton" onClick = { this.click }>
          Home
        </div>
    )
  }
})
