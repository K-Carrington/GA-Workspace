Tasks = new Mongo.Collection('tasks'); //global object creator

if (Meteor.isClient) {
  // This code only runs on the client
  Template.todoList.helpers({
  //  tasks: [
  //    { text: "This is task 1" },
  //    { text: "This is task 2" },
  //    { text: "This is task 3" }
   // ]
   tasks: function(){
    return Tasks.find({}, {sort: {createdAt: -1}})  //use mongo commands, -1 sorts in reverse order
   }
  });


  Template.todoList.events({
    "submit form": function(event){
      event.preventDefault();
      //console.log(event.target)
      var inputFromForm = event.target.taskForm.value;
      
      Tasks.insert({
        text: inputFromForm,
        createdAt: new Date()
      });

      event.target.taskForm.value = "";
    },
    "click .delete": function(){
      Tasks.remove(this._id);
    }
  })
}

