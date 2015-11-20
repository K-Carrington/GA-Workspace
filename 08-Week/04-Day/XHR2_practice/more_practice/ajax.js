var
  XMLHttpRequest = require("xhr2"),
  async = new XMLHttpRequest()


 	//Obj Expects:
 	//  { method: url: params: success: failure: }

  async.open(obj.method, "http://www.cnn.com")
  async.onload = function(data) {
    if (this.status === 200) {
      console.log(data.currentTarget.response)
    } else if (this.status > 299) {
      console.log("Error: #"+ this.status)
    } else {
      console.log("Unknown Error")
    }
  }
  async.send()
