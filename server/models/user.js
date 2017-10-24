var mongoose=require('mongoose');

var User=mongoose.model('User',{
	email:{
		type:String,
		required:true,//gereklidir
		trim:true,//trim=düzeltme
		minlength:1
	}
});


module.exports={User};

