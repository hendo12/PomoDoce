const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoListSchema = new Schema({
  todos : Array,
  userId: { type: Schema.Types.ObjectId, ref: 'User'}
}); 

const TodosList = mongoose.model('TodosList', todoListSchema);
module.exports = TodosList;
