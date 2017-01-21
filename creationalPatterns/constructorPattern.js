//Task is equivalent to a Class here..
var Task = function(name){
  this.name = name;
  this.completed = false;
  this.complete = function(){
    console.log('Completing task', this.name);
    this.completed = true;
  }
  this.save = function(){
    console.log('saving task', this.name);
  }
}

//Instances of Task class can be created like this:
var task1 = new Task("Buy Milk");
var task2 = new Task("Do laundry");

// task1 and task2 are separate instances having separate set of common methods..
task1.complete();
task2.complete();

task1.save();

//===============================Doing it prototype style======================================

//Task is equivalent to a Class here..
var TaskWithPrototype = function(name){
  this.name = name;
  this.completed = false;
}
//Doing it this way does't always create a new complete method whenever the 
//new instance of the TaskWithPrototype class is created (which happens in the last example)..
/* 
  ClassName.prototype.methodName = function(){
    <<method body>>
  }
*/
TaskWithPrototype.prototype.complete = function(){
    console.log('Completing task', this.name);
    this.completed = true;
}

TaskWithPrototype.prototype.save = function(){
  console.log('saving task', this.name);
}

var task3 = new TaskWithPrototype("Buy Milk");
var task4 = new TaskWithPrototype("Do laundry");

task3.complete();
task4.complete();

task3.save();