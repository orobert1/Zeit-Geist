const React = require('react');
const ReactDOM = require('react-dom');
const IndexItem = require('./index_item');
const ProjectActions = require('../actions/project_actions');
const ProjectIndexStore = require('../stores/project_index_store')

module.exports = React.createClass({
  getInitialState(){
    return({posts:[], last_created_at:"1999-08-10T14:13:03.790Z"});
  },
  componentDidMount(){
    ProjectActions.loadProjectIndex(this.state.last_created_at);
    this.act = ProjectIndexStore.addListener(this._change);
  },
  componentWillUnmount(){
    ProjectIndexStore.remove_all();
    this.act.remove();
  },
  _change(){
    let projCre = "1999-08-10T14:13:03.790Z";
    if(this.state.posts.length>0){
      projCre = this.state.posts[this.state.posts.length-1].project.created_at
    }
    this.setState({posts: ProjectIndexStore.allProjects(), last_created_at: projCre});
    ProjectIndexStore.setLastDate(this.state.last_created_at);

  },
  populate(){
    let result = [];
    for(var i = 0; i<this.state.posts;i++){
      result.push(this.state.post[i]);
    }
    return result;
  },

  render(){
    let population = <div></div>
    if(this.state.posts.length >= 1){
      let last = this.state.posts.length-1;
      population = this.state.posts.map(function(el, i){
        let listener = "";
        if(i===last){
          listener = "listenToMe";
        }
        return ( <IndexItem key={el.project.id} listener={listener} el={el.project} user={el.user.username} userId={el.user.id} className="index-item"/>);
      });

    }
    return(
      <div className = "content-container">
        {
          population
        }
        {this.props.children}
      </div>
    );
  }
});
