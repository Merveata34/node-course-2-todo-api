var express=require('express');
var bodyParser=require('body-parser');
var {ObjectID}=require('mongodb');

var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {User}=require('./models/user');

var app=express();
const port=process.env.PORT || 3000;
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
	var todo=new Todo({
		text:req.body.text
	});
	
	todo.save().then((doc)=>{
		res.send(doc);

	},(e)=>{
		res.status(400).send(e);
	});

});

app.get('/todos',(req,res)=>{
	Todo.find().then((todos)=>{
		res.send({todos});
	},(e)=>{
		res.status(400).send(e);
	})
});

//GET /todos/123456
app.get('/todos/:id',(req,res)=>{
	var id=req.params.id;

	if(!ObjectID.isValid(id)){//valid :geçerli
		return res.status(404).send();
	}

	Todo.findById(id).then((todo)=>{
		if(!todo){
			return res.status(404).send();
		}

		res.send({todo});
	}).catch((e)=>{
		res.status(400).send();

	});
	});

	//Valid id using isValid
	//404- send back empty send

	//findById
	//success
	  //if todo-send it back
	  //if no todo-send back 404 with empty body
	//error
	//400-and send empty body back
app.delete('/todos/:id',(req,res)=>{
	//id getircez get id 
	//sonra geçerlimi id yoksa değilmi ona bakıcaz
	//id yi kaldırcaz
	  //eğer no doc ise send 404
	  //eğer doc ise geriye send 200 döndürür.
	//error //400 with empty body
	var id=req.params.id;

	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}
	Todo.findByIdAndRemove(id).then((todo)=>{
		if(!todo){
			return res.status(404).send();
		}
		res.send(todo);
	}).catch((e)=>{
		res.status(400).send();
	});
});

app.listen(port,()=>{
	console.log('Started up'+port);
});

module.exports={app};
