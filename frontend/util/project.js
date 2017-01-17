let $ = require('jquery');

function absProject( payload ){
  this.target = payload.target;
  this.project = payload.project;
  this.index = payload.index;
  this.user = payload.user
  this.click = payload.click;
  this.authorClick = payload.authorClick;
  this.timing = payload.timing;
  this.id = "absoluteProject" + this.project.id;
  this.user = payload.user;
  this.addProject();
}

absProject.prototype.addProject = function(){
  if( document.getElementById( this.id ) ){
    this.removeProject();
  }
  if( this.project.cover_image ){
    let target = $( document.getElementById(this.target) );
    if (target.position()) {
      window.setTimeout( function(){
        let project = document.createElement("div");
        let img = document.createElement( "img" );
        let container = document.createElement( "div" );
        let absoluteContainer = document.getElementById("absoluteContainer");
        let target = $( document.getElementById(this.target) );
        let title = document.createElement( "div" );
        let author = document.createElement( "div" )
        container.className = "absoluteProjectContainer";
        img.className = "absoluteImg"
        project.appendChild( container );
        project.appendChild( img );
        title.innerHTML = this.project.title;
        author.innerHTML = "by " + this.user.username;
        title.appendChild( author );
        project.appendChild( title );
        title.className = "absoluteTitle";
        author.className = "absoluteAuthor"
        author.onclick = this.authorClick;
        project.id = this.id;
        project.onclick = this.click;
        img.src = this.project.cover_image;
        project.className = "absoluteCont";
        if( target.css('width') === "0px" || target.css('width') === "" ){
          $(project).css({ top: target.position().top, left: target.position().left, width: target.height(), height: target.height(), marginTop: target.css( 'margin-top' ), marginLeft: target.css( 'margin-left' ),  paddingRight: target.css( 'padding-right' ), padding: target.css( 'padding' ) });
        }else{
          $(project).css({ top: target.position().top, left: target.position().left, width: target.css('width'), height: target.height(), marginTop: target.css( 'margin-top' ), marginLeft: target.css( 'margin-left' ),  paddingRight: target.css( 'padding-right' ), padding: target.css( 'padding' ) });
        }
        absoluteContainer.appendChild(project);
        window.setTimeout( function(){
          $(project).css({ opacity: 1 });
        }, 100 + (this.timing * 50) );
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
  if( project ){
    document.getElementById("absoluteContainer").removeChild(project)
  }
}

absProject.prototype.reloadImage = function(){
  let project = document.getElementById( this.id );
  let target = $( document.getElementById(this.target) );
  if( target.position() ){
    $(project).css({ width: target.css('width') });

  }
}





module.exports = absProject
