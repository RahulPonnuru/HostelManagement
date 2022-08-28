const mongoose=require("mongoose");

const signUpSchema=new mongoose.Schema({
    name:String,
    mail:String,
    password:String
});

const Sign=mongoose.model("Sign",signUpSchema);
module.exports=Sign;