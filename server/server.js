var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('../config/db.js');
var {todoModel} = require('../model/todo');
var tasks = require('../route/task');

var app = express();

app.use(bodyParser.json());

app.use('/todo',tasks);


/*
var newTodo= new Todo({
	text : "Thats it!!!"
});

newTodo.save().then((doc)=>{console.log(doc.ops);},(err)=>{console.log(err);});
*/

app.listen('3000',()=>{
	console.log('Server Up');
});