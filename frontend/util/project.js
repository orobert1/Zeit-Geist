let $ = require('jquery');

function absProject( payload ){
  this.target = payload.target;
  this.project = payload.project;
  this.index = payload.index;
  this.click = payload.click;
  this.id = "absoluteProject" + this.project.id;
  this.user = payload.user;
  this.addProject();
}

absProject.prototype.addProject = function(){
  if( this.project.cover_image ){
    let target = $( document.getElementById(this.target) );
    if (target.position()) {
      window.setTimeout( function(){
        let project = document.createElement("img");
        let absoluteContainer = document.getElementById("absoluteContainer");
        let target = $( document.getElementById(this.target) );
        project.id = this.id;
        project.onclick = this.click;
        project.src = this.project.cover_image;
        project.className = "absoluteImg";
        $(project).css({ top: target.position().top, left: target.position().left, width: "auto", height: target.height(), marginTop: target.css( 'margin-top' ), marginLeft: target.css( 'margin-left' ),  paddingRight: target.css( 'padding-right' ), padding: target.css( 'padding' ) });
        absoluteContainer.appendChild(project);
        window.setTimeout( function(){
          $(project).css({ opacity: 1 });
        }, 100 );
      }.bind(this), 100);
    }else{
      this.removeProject();
    }
  }else{
  }
}

absProject.prototype.shuffle = function(){
  let project = document.getElementById( this.id );
  let target = $( document.getElementById(this.target) );
  if( target.position() ){
    $(project).css({ top: target.position().top, left: target.position().left, marginTop: target.css( 'margin-top' ), paddingRight: target.css( 'padding-right' ), padding: target.css( 'padding' ) });
  }else{
    this.removeProject();
  }
}

absProject.prototype.removeProject = function(){
    let project = document.getElementById( this.id );
    $(project).css({opacity: 0});
    window.setTimeout( this.remove.bind( this ), 200 );
}

absProject.prototype.remove = function(){
  let project = document.getElementById( this.id );
  if( project ){
    $(project).remove();
  }
}





module.exports = absProject
