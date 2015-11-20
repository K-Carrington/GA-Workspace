var
  requestModule = require("request")

    //Get from another server
    
  //JSON.parse(string) changes it into a JS object

  //TBD need to check if children[1] is non null(see below)
  //myImage = JSON.parse(body).data.children[1].data.thumbnail;
  //console.log("image url = " + myImage);
  //console.log("score = " + JSON.parse(body).data.children[1].data.score);
  
 module.exports = function(obj){
 	//Obj Expects:
 	//  { method: url: params: success: failure: }
  return new Promise(function (fulfil, reject) {
    requestModule(obj.url, function(err, response, body) {
      if (err) throw err;
      if (response.statusCode === 200) {
        fulfil(body); //console.log(body);
      }
      else if (response.statusCode > 299) {
        reject({message: "Error: #"+response.statusCode})
      } else {
      reject({message: "Unknown Error"})
      }
    })
      
    /*
  async.open(obj.method, obj.url, true)
  async.onload = function(data) {
    if (this.status > 199 && this.status < 299) {
      fulfil(data.currentTarget.response)
    } else if (this.status > 299) {
      reject({message: "Error: #"+ this.status})
    } else {
      reject({message: "Unknown Error"})
    }
  }
  async.send() */
}) 
}

