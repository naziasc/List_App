const mongoose = require ('mongoose')

var toDoSchema = {
  id: Number,
  toDo: String,
  complete: Boolean
}

var toDos = mongoose.model('toDo', mongoose.Schema(toDoSchema));

module.exports = toDos;
