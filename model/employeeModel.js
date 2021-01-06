let mongoose=require('mongoose');
mongoose.set('debug', true);

var userSchema=new mongoose.Schema({
    eid: {
        type:String,
        required:'required'
     },
     first: {
         type:String,
         required:'required'
      },
      last: {
        type:String,
        required:'required'
     },
     position: {
        type:String,
       required:'required'
     },

    }, { timestamps:true });

module.exports=mongoose.model("employee",userSchema,'employees')