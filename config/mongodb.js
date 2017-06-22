//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

console.log(new ObjectID());

var user  = {name : 'rohan',age : 26};

var {name} = user;
console.log(name);
/*MongoClient.connect('mongodb://localhost:27017/todoApp',(err,db)=>{
	if(err){
		return console.log(err);
	}
	db.collection('Todos').insertOne(
		{
			text:"Psssssttt.."
		},(err,res)=>{
		if(err){
			return console.log(err);
		}
		console.log(res.ops[0]._id.getTimestamp());
	});
	db.close();
});*/


//search
MongoClient.connect('mongodb://localhost:27017/todoApp',(err,db)=>{
	if(err){
		return console.log(err);
	}
	db.collection('Todos').find().toArray().then((docs)=>{
		console.log(docs);
	},(err)=>{
		console.log(err);
	});
//	db.close();

});