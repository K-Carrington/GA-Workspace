var
  XMLHttpRequest = require("xhr2"),
  async = new XMLHttpRequest()

 module.exports = function(obj){
 	//Obj Expects:
 	//  { method: url: params: success: failure: }

  async.open(obj.method, obj.url)
  async.onload = function(data) {
    if (this.status === 200) {
      obj.success(data.currentTarget.response)
    } else if (this.status > 299) {
      obj.failure(message: "Error: #"+ this.status)
    } else {
      obj.failure(message: "Unknown Error")
    }
  }
  async.send()
}