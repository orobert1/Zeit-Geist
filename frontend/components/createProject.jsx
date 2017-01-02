const React = require('react');
const ReactDOM = require('react-dom');
const ProjectActions = require('../actions/project_actions');
const UserStore = require('../stores/user_store');
const ProjectStore = require('../stores/project_store');

module.exports = React.createClass({
  getInitialState(){
    return ({ images: [], title: "" })
  },

  componentDidMount(){

    window.setTimeout(function(){
        $('#projectViewPane').css({ width: "60%" })
    }, 200);
    $( "#projectViewPane" ).hover(
      function(){
        $(".absoluteImg").css({ transition: ".6s", opacity: .08 })
      },
      function(){
        $(".absoluteImg").css({ opacity: 1 })
      }

    );

    $( ".scrollPane" ).hover(
      function(){
        $(".absoluteImg").css({ transition: ".6s", opacity: .08 })
      },
      function(){
        $(".absoluteImg").css({ opacity: 1 })
      }

    );

    $( ".absoluteImg" ).hover(
      function(){
        $("#projectViewPane").css({ transition: ".6s", opacity: .2 })
      },
      function(){
        $("#projectViewPane").css({ opacity: 1 })
      }

    );
  },

  xClick(){
    $(".absoluteImg").css({ opacity: 1 })
    ProjectActions.triggerProjectCreationPaneRemoval();

  },

  titleChange(e){
    this.setState({title: e.target.value});
  },

  drop( e ){
    e.preventDefault();
    let files = e.dataTransfer.files;
    for (var i = 0; i < files.length; i++) {
      let file = files[i];
      let reader = new FileReader();
      reader.onloadend = function(){
        let result = reader.result;
        let images = this.state.images.concat( [ result ] );
        this.setState({ images: images });
      }.bind(this);
     reader.readAsDataURL(file);
    }
  },

  allowDrop( e ){
    e.preventDefault();
  },

  images(){
    if( this.state.images.length > 0 ){
      return this.state.images.map( function( el, index ){
        return <img src = { el } key = { index } id = { "createImage" + index } />
      } )
    }
  },

  createProject(){
    let title = this.state.title;
    let images = this.state.images;
    let user = UserStore.currentUser();
    let payload = { title: title, images: images, user: user }
    ProjectActions.createProject( payload );
  },

  render(){
    return(
      <div id = "projectViewPane">
        <div className = "xContainer">
          <div className = "x" onClick = { this.xClick } >X</div>
        </div>
        <div className = "scrollPane">
          <input className = "titleInput" placeholder = "Title" type = "text" onChange = {this.titleChange}/>
          {
            this.images()
          }
          <div className = "projectDropZone" onDrop = { this.drop } onDragOver = { this.allowDrop } >
            <div className = "dropTarget">
              Drag Image Here
            </div>
          </div>
          <div className = "createProjectButton" onClick = { this.createProject }>
            Create New Project
          </div>
        </div>
      </div>
    )
  }
});
