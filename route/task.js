var express = require('express');

var router = express.Router();

var {mongoose} = require('../config/db.js');
var {todoModel} = require('../model/todo');


router.post('/',(req,res)=>{
	var todo = new todoModel({
		text: req.body.text
	});

	todo.save().then((doc)=>{
		res.status(200).send(doc);
	},(err)=>{
		res.status(400).send(err);
	});
});

module.exports = router;