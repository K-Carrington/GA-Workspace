var ajax = require("./ajax")
  
 var event1 = ajax({method: "GET", url: "http://www.google.com"})

 //Async version
  var event3 = ajax({method: "GET", url: "http://www.cnn.com"})
 var event2 = ajax({method: "GET", url: "http://www.tjs.com"})
 event1.then(function(success){
  console.log("Success1")
 }).catch(console.log.bind(console))

 event2.then(function(success){
  console.log("Success2")
 }).catch(console.log.bind(console))

 event3.then(function(success){
  console.log("Success3")
 }).catch(console.log.bind(console))

//Sync version
 event1.then(function(success){
  console.log("Success1")
  return ajax({method: "GET", url: "http://www.cnn.com"})
 }).then(function(success){
  console.log("Success2")
  ajax({method: "GET", url: "http://www.tjs.com"})
 }).then(function(success){
  console.log("Success3")
 }).catch(console.log.bind(console))




