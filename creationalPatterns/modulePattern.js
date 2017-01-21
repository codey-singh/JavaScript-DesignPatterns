//Module is nothing but a group of methods that are related in some sense..
//below is a class that gets and saves data from and to the db.
var repo = function () {
  
  //this db object will be private and can't be accessible from outside due to closure.
  var db = {};
  var get = function (id) {
    console.log("Getting task", id);
    return {
      name: "new task from db"
    };
  };

  var save = function (task) {
    console.log("saving task : " + task.name + " to db");
  }
  return {
    get: get,
    save: save
  }
}


//exporting the module to make it accessible in other parts of app.
module.exports = repo();