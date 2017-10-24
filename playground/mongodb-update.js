//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log('MongoDB servera baglanılamadi.');
	}
	console.log('MongoDB servera baglandi.');

//	db.collection('Todos').findOneAndUpdate({
//        _id:new ObjectID('59eee06315420f8fbece243b')
//
 //   },{
//        $set:{
//            completed:true

//        }
//    },{
//        returnOriginal:false
//    }).then((result)=>{
//        console.log(result);
//    });

    db.collection('Users').findOneAndUpdate({
        _id:new ObjectID('59eda94938137a01c41e3390')

    },{
        $set:{
            name:'Gamze'

        },
        $inc:{
            age:1

        }
    },
    {
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });


	//db.close();

});