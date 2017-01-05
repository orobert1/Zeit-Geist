const React = require('react');
const ReactDOM = require('react-dom');
const ProjectActions = require('../actions/project_actions');
const CoverChoice = require('./coverChoice');

module.exports = React.createClass({
  componentDidMount(){
    $(".absoluteImg").css({ opacity: 1 })
    $('#projectViewPane').css({ width: "60%" })
    window.setTimeout(function(){
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

        $( "#projectViewPane" ).hover(
          function(){
            $(".absoluteImg").css({ transition: ".6s", opacity: .08 })
          },
          function(){
            $(".absoluteImg").css({ opacity: 1 })
          }

        );

    }, 200);

  },

  images(){
    return this.props.project.images.map( function( el, index ){
      return <CoverChoice key = { index } el = { el } project = { this.props.project }  />
    }.bind( this ) )
  },

  click( e ){

  },

  xClick(){
    $(".absoluteImg").css({ opacity: 1 })
    ProjectActions.clearProjectCreated();
    ProjectActions.triggerProjectCreationPaneRemoval();
  },

  render(){
    return(
      <div id = "projectViewPane">
        <div className = "xContainer">
        <div className = "x" onClick = { this.xClick } >X</div>
        <div className = "scrollPane">
          <div className = "chooseCoverTitle"> Choose A Cover Photo </div>
          <div className = "chooseCoverImagesContainer">
            {
              this.images()
            }
          </div>
        </div>
        </div>
      </div>

    )
  }
})
