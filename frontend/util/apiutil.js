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
  logOut(la){
      $.ajax({url: `api/session`,
      method: "DELETE",
      success(data){
        la(data);
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
  getUser(id, la){
    $.ajax({
      url: `api/users/${id}`,
      method: 'GET',
      success(data){
        la(data);
      }
    });
  },

  createProject(data, la, fnc){
    fnc = fnc;
    $.ajax({
      url: "api/projects",
      method: 'POST',
      data: data,
      success(data){
        la(data, fnc);
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
      data: {cover_image: data.cover_image, title: data.title, user_id: data.user_id},
      success(returnData){
        console.log("You are so successfuck");
      }
    })
  }
};
