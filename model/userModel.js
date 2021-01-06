let mongoose=require('mongoose');
mongoose.set('debug', true);

var userSchema=new mongoose.Schema({
    email: {
        type:String,
        required:'required'
     },
     password: {
         type:String,
         required:'required'
      },
    });

module.exports=mongoose.model("user",userSchema,'users')