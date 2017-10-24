var mongoose=require('mongoose');

var Todo=mongoose.model('Todo',{
	text:{
		type:String,
		required:true,
		minlength:1,
		trim:true
	},
	completed:{
		type:Boolean,
		default:null
	},
	completedAt:{
		type:Number,
		default:null
	}
});

//module.exports.Todo()=Todo; galiba Todo burada nesne olduğu için module.
//exportsa Todo nesnesini atamalıyım.
module.exports={Todo};