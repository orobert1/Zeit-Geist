const React = require('react');
const ReactDOM = require('react-dom');
const UserStore = require('../stores/user_store');
const UserActions = require('../actions/user_actions');
const ProjectIndexStore = require('../stores/project_index_store');
const IndexItem = require('./index_item');
// const Infinite = require('react-infinite');
module.exports = React.createClass({
  getInitialState(){
    return({ user: {}, projects:[] , last_created_at:"1999-08-10T14:13:03.790Z", isInfiniteLoading: false});
  },
  componentDidMount(){
    UserActions.getUser(this.props.params.userId,this.state.last_created_at,12);
    this.act = UserStore.addListener(this._change);

  },

  componentWillUnmount(){
    this.act.remove();
  },
  _change(){
    let projs = ProjectIndexStore.allProjects();
    this.setState({user: UserStore.find(this.props.params.userId),
    projects: projs,
    last_created_at: projs[projs.length-1].created_at});
    ProjectIndexStore.updateDate(this.state.last_created_at);
    ProjectIndexStore.setFetchFalse();
    ``
  },
  loadMoreProjects(){

  },
  elementInfiniteLoad: function() {
    return <div className="infinite-list-item">
        Loading...
    </div>;
},

  render(){
    let population = <div></div>
    if(this.state.projects.length >= 1){
      let user = this.state.user
      let last = this.state.projects.length-1;
      population = this.state.projects.map(function(el, i){
        let listener = "";

        if(i===last){
          listener = "listenToMe";
        }
        return ( <IndexItem key={el.id} listener={listener} el={el} user={user.username} userId={user.id} className="index-item"/>);
      });
    }

    return(
      <div className="profile-content-container">
        <div className="profile-user-side-menu">
          <h3>
            { this.state.user.username }
          </h3>
        </div>
        <div className="profile-projects">


          <div>
            {
              population
            }
          </div>
        </div>
      </div>
    );
  }
});
