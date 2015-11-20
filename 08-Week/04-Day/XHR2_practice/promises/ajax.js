var
  XMLHttpRequest = require("xhr2")
  
 module.exports = function(obj){
 	//Obj Expects:
 	//  { method: url: params: success: failure: }
return new Promise(function (fulfil, reject) {
  var async = new XMLHttpRequest()
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
  async.send()
})
}