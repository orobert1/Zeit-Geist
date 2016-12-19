import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
const React = require('react');
const SessionActions = require('./actions/sessionActions');
const ReactDOM = require('react-dom');
const Index = require('./components/index');
const Util = require('./util/apiutil');
const LogIn = require('./components/login');
const CurrentUserStore = require('./stores/current_user_store');
const Header = require('./components/header.jsx');
const CreateUser = require('./components/create_user');
const Profile = require('./components/profile');
const ChooseCover = require('./components/choose_cover');
const CreateNewProject = require('./components/create_new_project');
const CoverCrop = require('./components/cover_crop');
const ShowProject = require('./components/show_project');
const ProjectIndexStore = require('./stores/project_index_store');
const UserActions = require('./actions/user_actions');
const ShowUser = require('./components/showUser');

window.util = Util;

const App = React.createClass({
  render(){
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
});

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Index}/>
    <Route path="/index" component = {Index}/>
    <Route path='/login' component={LogIn}/>
    <Route path='/user/:userId' component = { ShowUser }/>
    <Route path='/createUser' component={CreateUser}/>
    <Route path='/profile/:userId' component={Profile}/>
    <Route path='/create_new_project' component={CreateNewProject}/>
    <Route path='/choose_project_cover' component={ChooseCover}/>
    <Route path='/cover-crop/:projectId' component={CoverCrop}/>
    <Route path='/show/:projectId' component={ShowProject}/>
  </Route>
);



document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<Router routes={routes} history={hashHistory}>

  </Router>, document.getElementById("content")
);
});

document.addEventListener('scroll', function(){
  if($('#listenToMe') && $('.listenToMe').length>0){
    if($(window).height() - ($('#listenToMe').offset().top - $(window).scrollTop()) > 200){
        if(ProjectIndexStore.getFetchStatus() === false){
          ProjectIndexStore.setFetchTrue();
          UserActions.getMoreProjects();
      }
    }
  }
  if($('.filter-bar') && $('.index-page') && $('.head-fixed') ){
    if(158 < $(window).scrollTop()){
      $('.filter-bar').addClass("filter-bar-fixed");
      $('.index-page').addClass("index-page-add-margin");
      if($('.head-fixed').style){
        $('.head-fixed').style.opacity = 0;
      }
    }else{
      $('.filter-bar').removeClass("filter-bar-fixed");
      $('.index-page').removeClass("index-page-add-margin");
      $('.head-fixed').show();

    }
  }
});
