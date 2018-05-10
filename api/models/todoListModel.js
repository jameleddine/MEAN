var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PostSchema = new Schema({
  title: {
    type: String,
    required: 'Kindly enter the title of the post'
  },
  entry_date: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String,
  },
  salaire: {
    type: String,
  },
  contract_type: {
    type: [{
      type: String,
      enum: ['cdi', 'cdd', 'sivp']
    }],
    required: 'Kindly enter the type of the post`s contract'
  },
  status: {
    type: [{
      type: String,
      enum: ['to Validate', 'ongoing', 'closed']
    }],
    default: ['to Validate']
  }
});

module.exports = mongoose.model('Posts', PostSchema);
