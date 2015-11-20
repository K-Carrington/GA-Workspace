var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var imageSchema = new Schema({
  image_url: String,
  created_at: Date
});

// on every save, add the date
imageSchema.pre('save', function(next) {
  // if created_at doesn't exist, add to that field
  if (!this.created_at) {
  	// get the current date
    var currentDate = new Date();
    this.created_at = currentDate;
  }
  next(); //make sure functions are run sequentially
});

var Image = mongoose.model('Image', imageSchema);
module.exports = Image;
