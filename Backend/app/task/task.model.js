var mongoose     = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema       = mongoose.Schema;

var TaskSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  value: {
    type: Number,
    required: true,
    default: 0
  },
  creator: {
    type: Schema.ObjectId,
    ref: 'User'/*,
    required: true*/
  },
  applicants: [{
    type: Schema.ObjectId,
    ref: 'User',
    default: []
  }],
  chosen: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  done: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Task', TaskSchema);
