var mongoose = require('mongoose')
  , Todo = mongoose.model('Todo', {
  	  text: String
  	  ,done: Boolean
  	  ,created_by: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  })

  