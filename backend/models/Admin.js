const mongoose=require("mongoose");

const adminSchema=new mongoose.Schema({
    name:String,
    hostel:String,
    issue:String,
    availableFrom:Date,
    availableTo:Date,
    roomNumber:Number,
    phone:Number,
    email:String,
    descOfIssue:String,
    status:String,
    complaintDate:Date,
    desk:String,
    statusOfComplaint:String,
    id:String
});

const Admin=mongoose.model("Admin",adminSchema);
module.exports=Admin;