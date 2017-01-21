class Task {
  constructor(name){
    this.name = name;
    this.completed = false;
  }
  complete(){
    this.completed = true;
  }
  save(){
    console.log("saving task", this.name);
  }
}

class UrgentTask extends Task{
  constructor(name, priority){
    super(name);
    this.priority = priority;
    this.completed = false;
  }
  complete(){
    this.sendNotification();
    super.complete();
  }
  sendNotification(){
    console.log("sending notification");
  } 
}

var urg1 = new UrgentTask('Eat Pizza.', 1);
urg1.complete();