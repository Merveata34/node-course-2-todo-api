//remove yani kaldırıcaz.
const{ObjectID}=require('mongodb');

const{mongoose}=require('./../server/db/mongoose');
const{Todo}=require('./../server/models/todo');
const{User}=require('./../server/models/user');

//Todo.remove({}).then((result)=>{
//	console.log(result);
//});
//Todo.findOneAndRemove(_id:'59f3055644c1dcb4bd33bb28').then((todo)=>{
	
//});

Todo.findByIdAndRemove('59f3055644c1dcb4bd33bb28').then((todo)=>{
	console.log(todo);

});

