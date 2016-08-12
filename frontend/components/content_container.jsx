const React = require('react');
const ReactDOM = require('react-dom');
const IndexItem = require('./index_item');
const ProjectActions = require('../actions/project_actions');
const ProjectIndexStore = require('../stores/project_index_store')

module.exports = React.createClass({
  getInitialState(){
    return({posts:[], max:30, min:0});
  },
  componentDidMount(){
    ProjectActions.loadProjectIndex(this.state.min,this.state.max);
    this.act = ProjectIndexStore.addListener(this._change);
  },
  componentWillUnmount(){
    this.act.remove();
  },
  _change(){
    this.setState({posts: ProjectIndexStore.allProjects()});
  },
  populate(){
    let result = [];
    for(var i = 0; i<this.state.posts;i++){
      result.push(this.state.post[i]);
    }
    return result;
  },

  render(){

    return(
      <div className = "content-container">
        {
            this.state.posts.map(function(el){
              return ( <IndexItem key={el.project.id} el={el.project} user={el.username} userId={el.user_id} className="index-item"/> );
            }
          )

        }
        {this.props.children}
      </div>
    );
  }
});
