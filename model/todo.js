var mongoose = require('mongoose');

var todo = {
	text: String,
	completed: Boolean,
	at: Number
}

var todoModel = mongoose.model('Todo',todo);


module.exports = {todoModel};
