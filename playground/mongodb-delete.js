//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log('MongoDB servera baglanılamadi.');
	}
	console.log('MongoDB servera baglandi.');

	//Birçoğunu sil(deleteMany metodunu kullancaz.ergüment olarak obje alır.)
	//db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
	//	console.log(result);
	//});

    //birini sil(deleteOne metodu )
    //db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
    //	console.log(result);
    //});

    //birini bul ve sil(findOneAndDelete metodu)
    //db.collection('Todos').findOneAndDelete({text:'Something to do'}).then((result)=>{
    //	console.log(result);
    //});

    //db.collection('Users').deleteMany({name:'merve'});

    db.collection('Users').findOneAndDelete({
    	_id:new ObjectID("59edf76b75187e0128eee144")
    }).then((results)=>{
    	console.log(JSON.stringify(results,undefined,2));

    });


	//db.close();

});