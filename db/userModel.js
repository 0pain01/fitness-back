const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name : {
		type: String,
		required : true
	},
    email:{
		type:String,
		required:true
	}
});

module.exports = mongoose.model.Subs || mongoose.model('Subs',userSchema);
