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
  }
};
