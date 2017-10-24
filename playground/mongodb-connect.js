//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log('MongoDB servera baglanılamadi.');
	}
	console.log('MongoDB servera baglandi.');

//	db.collection('Todos').insertOne({
//		text:'Something to do',
//		completed:false
//	},(err,result)=>{
//		if(err){
//			return console.log('Unable to insert todo',err);
//		}
//		console.log(JSON.stringify(result.ops,undefined,2));
//     
//	});
// NOT:   insert new doc intro Users(name,age,location)
//    db.collection('Users').insertOne({
//  	name:'merve',
//    	age:22,
//    	location:'Taksim'
//    },(err,result)=>{
//    	if(err){
//    		return console.log('MongoDb ulaşılamıyor.',err);
//    	}
//    	console.log(result.ops[0]._id.getTimestamp());
//
//    });

	db.close();

});