const ErrorStore = require('../stores/errors_store');
module.exports = {
  logIn(user,la){

    $.ajax({
      url: 'api/session',
      method: "POST",
      dataType: 'json',
      data: {user: user},
      error(err){
      },
      success(data){
        la(data);
      }
    });
  },

  getAllProjects( filters, callback ){

    $.ajax({
      url: 'api/projects',
      method: 'GET',
      data: filters,
      success( data ){
        callback( data );
      }
    })
  },

  logOut( la, reset ){

      $.ajax({url: `api/session`,
      method: "DELETE",
      success(){
        la();
        reset();
      }
    }
  );
},

  currentUser(la){

    $.ajax({
      url: 'api/session',
      method: 'GET',
      success(data){
        la(data);
      }
    });
  },

  createUser(user, la){

    $.ajax({
      url: 'api/users',
      method: 'POST',
      data: {user: user},
      success(data){
        la(data);
      },
      failure(err){
      }
    });
  },
  getUser(id, callback){
    $.ajax({
      url: `api/users/${id}`,
      method: 'GET',
      success(data){
        callback(data);
      }
    });
  },
  destroyProject(id,fnc){


    $.ajax({
      url: `api/projects/${id}`,
      method: 'DELETE',
      success(data){

        fnc();
      }
    })
  },
  getUserProfile(id, creation, max, la){

    $.ajax({
      url: `api/users/${id}`,
      method: 'GET',
      data: {last_project_update_creation: creation, payload_size: max},
      success(data){

        la(data);
      }
    });
  },

  createProject( payload, callback ){
    $.ajax({
      url: "api/projects",
      method: 'POST',
      data: payload,
      success(data){
        callback( data );
      }
    });
  },

  updateCoverPhoto( project ){
    $.ajax({
      url: `api/projects/${project.projectId}/edit`,
      method: 'GET',
      data: project,
      success(data){
      }
    });
  },

  createImage(data, successCallback, errorCallback){

    $.ajax({
      url: "api/images",
      method: "POST",
      data: data,
      contentType: false,
      processData: false,
      dataType: "json",
      success(returnData){
        successCallback(returnData);
      },
      errors(returnData){
        errorCallback(returnData);
      }
    });
  },

  createDescription(data, successCallback, errorCallback){


    $.ajax({
      url: 'api/descriptions',
      method: "POST",
      data: data,
      success(){
        successCallback(data);
      },
      errors(data){
        errorCallback(data);
      }

    })
  },
  getImages(id, successCallback){


    $.ajax({
      url:`api/projects/${id}/images`,
      method:'GET',
      success(data){
        successCallback(data);
      }
    })
  },
  editProject(data, la){

    $.ajax({
      url:`api/projects/${data.id}`,
      method: 'PATCH',
      data: data,
      success(returnData){
        la(returnData);
      }
    })
  },
  getProjects(date, la){


    $.ajax({
      url:'api/projects/',
      method: 'GET',
      data: {date: date},
      success(data){
        la(data);
      }
    })
  },

  getProject(id, callback){

    $.ajax({
      url: `api/projects/${id}`,
      method: 'GET',
      success(data){
        callback(data);
      }
    })
  }
};
