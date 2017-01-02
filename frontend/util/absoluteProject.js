let $ = require('jquery');
let Project = require('./project');

function absoluteProject(){
  this.oldProjects = {};
  this.newProjects = {};
  this.projectsMounted = 0;

}

absoluteProject.prototype.registerProjectLength = function( projectLength ){
  this.projectsToMount = projectLength;
}

absoluteProject.prototype.addProject = function( payload ){
  if( this.newProjects[payload.project.id] ){

  }else if( this.oldProjects[ payload.project.id ] ){
    let rollover = this.oldProjects[ payload.project.id ];
    window.setTimeout( rollover.shuffle.bind( rollover ), 10);
    this.newProjects[ payload.project.id ] = rollover;
    delete this.oldProjects[ payload.project.id ];
  }else{
    if( payload.project.id === 1 ){

    }
    payload.timing = this.projectsMounted;
    this.newProjects[ payload.project.id ] = new Project( payload )
  }
  this.projectsMounted ++;
  if( this.projectsMounted === this.projectsToMount ){
    this.removeOldProjects();
  }
}
absoluteProject.prototype.shuffleAll = function(){
  let allProjects = this.getOldProjects();
  for (var i = 0; i < allProjects.length; i++) {
    let oldProject = this.oldProjects[allProjects[i]];
    oldProject.shuffle();
  }
}

absoluteProject.prototype.removeOldProjects = function(){
  let oldProjects = this.getOldProjects();
  for (var i = 0; i < oldProjects.length; i++) {
    let oldProject = this.oldProjects[oldProjects[i]];
    if( oldProjects[i] === 1 ){

    }
    oldProject.removeProject();
  }
  this.projectsMounted = 0;
  this.oldProjects = this.newProjects;
  this.newProjects = {};
  window.setInterval( this.shuffleAll.bind( this ), 600 );
}

absoluteProject.prototype.getOldProjects = function(){
  return Object.keys( this.oldProjects );
}

absoluteProject.prototype.checkOverlap = function( newProject ){
  if( this.oldProjects[ newProject.project.id ] ){
    return true
  }else{
    return false
  }
}

module.exports = absoluteProject;
