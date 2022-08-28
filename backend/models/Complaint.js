const mongoose=require('mongoose');

const complainSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    mobile:Number,
    emailId:String,
    topic:String,
    address:String,
    image:String
});

const Complaint=mongoose.Model('Complaint',complainSchema);
module.exports=Complaint;