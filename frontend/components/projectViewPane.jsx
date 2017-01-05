const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');
const Grid = require('../util/grid');
const ProjectActions = require('../actions/project_actions');
module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState(){
    return({ project: this.props.project })
  },

  componentDidMount(){
    let title = document.getElementById("viewPaneProjectTitle");
    let grid = new Grid();
    window.setTimeout( function(){
      $( ".projectImage" ).hover(
        function(){
          $(".absoluteCont").css({ transition: ".6s", opacity: .08 })
        },
        function(){
        }

      );

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
    }, 1000 );

    $(".absoluteCont").css({ transition: ".6s", opacity: .08 })
    this.setState({ project: this.props.project });

    $('.scrollPane').children().each(function(fadeInDiv) {
     $(this).delay( (fadeInDiv + 1) * 100).fadeIn(400);
    });


  },

  xClick(){
    $(".absoluteCont").css({ opacity: 1 })
    $('.scrollPane').children().each(function(fadeInDiv) {
     $(this).delay(500 / ( fadeInDiv + 1 ) ).fadeOut(400);
    });
    $('#projectViewPane').delay(400).fadeOut(200);
    window.setTimeout(
      ProjectActions.removeProject,
      600
    );
  },

  componentWillReceiveProps( props ){
    this.setState({ project: props.project });
  },

  title(){
    if( this.state.project ){
      return(
        <div id = "viewPaneProjectTitle">
          <div className = "fixedTitleContainer">
            <div className = "bottomTitleContainer">
              {
                this.state.project.cover.title
              }
            </div>
          </div>
        </div>
      )
    }
  },

  cover(){
    return( <img src = { this.state.project.cover.cover_image } key = {index} className = "projectImage" /> )
  },

  project(){
    return this.state.project.images.map( function( el, index ){
      return( <img src = { el.url } key = {index} className = "projectImage" /> )
    }.bind(this));
  },

  author(){
    return (
      <div className = "author" onClick = { this.userPage }>
        by
        <div className = "userName">
          {
            this.state.project.user.username
          }
        </div>
      </div>
    )
  },

  userPage(){
    let filterPackage = { userId: this.state.project.cover.user_id };
    ProjectActions.getAllProjects( filterPackage );
    this.xClick();
  },

  render(){
    return(
      <div id = "projectViewPane">
        <div className = "xContainer">
          <div className = "x" onClick = { this.xClick } >X</div>
        </div>
        <div className = "scrollPane">
          {
            this.title()
          }
          {
            this.author()
          }
          {
            this.cover()
          }
          {
            this.project()
          }
        </div>
      </div>
    )
  }
})
