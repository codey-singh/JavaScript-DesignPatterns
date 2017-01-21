//Module is nothing but a group of methods that are related in some sense..
//below is a class that gets and saves data from and to the db.
var repo = function(){
  return {
    get : function(id){
      console.log("Getting task", id);
      return {
        name:"new task from db"
      };
    },
    save : function(task){
      console.log("saving task : "+task.name+" to db");
    }
  }
}

//exporting the module to make it accessible in other parts of app.
module.exports = repo();