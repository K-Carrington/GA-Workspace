if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0); //sets a variable, actually an obj {couter: 0}

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');  //getter for counter
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1); //putter
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
