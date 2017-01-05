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
    window.setTimeout( function(){

      window.setTimeout( function(){
        $( "#projectViewPane" ).hover(
          function(){
            $(".absoluteCont").css({ transition: ".6s", opacity: .08 })
          },
          function(){
            $(".absoluteCont").css({ opacity: 1 })
          }

        );

        $( ".scrollPane" ).hover(
          function(){
            $(".absoluteCont").css({ transition: ".6s", opacity: .08 })
          },
          function(){
            $(".absoluteCont").css({ opacity: 1 })
          }

        );

        $( ".absoluteCont" ).hover(
          function(){
            $("#projectViewPane").css({ transition: ".6s", opacity: .2 })
          },
          function(){
            $("#projectViewPane").css({ opacity: 1 })
          }

        );
      }, 1000);

      $(".absoluteCont").css({ transition: ".6s", opacity: .08 })
      this.setState({ project: this.props.project });

      $('.scrollPane').children().each(function(fadeInDiv) {
       $(this).delay( (fadeInDiv + 1) * 100).fadeIn(400);
      });
    }.bind( this ), 700);
  },

  xClick(){
    $(".absoluteCont").css({ opacity: 1 })
    $('.scrollPane').children().each(function(fadeInDiv) {
     $(this).delay(500 / ( fadeInDiv + 1 ) ).fadeOut(400);
    });
    $('#projectViewPane').delay(400).fadeOut(200);
    window.setTimeout(
      ProjectActions.triggerProjectCreationPaneRemoval,
      600
    );
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

  removeTitle(){
    this.setState({ title: "" });
  },

  render(){
    return(
      <div id = "projectViewPane">
        <div className = "xContainer">
          <div className = "x" onClick = { this.xClick } >X</div>
        </div>
        <div className = "scrollPane">
          <input className = "titleInput" placeholder = "Title" type = "text" onChange = {this.titleChange} onClick = { this.removeTitle } />
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
