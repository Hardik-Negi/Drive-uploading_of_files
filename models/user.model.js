const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
   username:{
      type:String,
      require:true,
      trim:true,
      lowercase:true,
      unique:true,
      minlength:[3,"username must be at least 3 characters long"]
   },

   email:{
      type:String,
      require:true,
      unique:true,
      lowercase:true,
      trim:true,
      minlength:[13,"Email must be at least 13 characters long"]
},
   
password:{
   type:String,
   require:true,
   trim:true,
   minlength:[5,"Password must be at least 5 characters long"]
}

})

const user=mongoose.model('user',userSchema);

module.exports=user;