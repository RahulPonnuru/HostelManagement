const cookieSession = require('cookie-session');
const express=require('express');
const passport = require('passport');
const passportSetup=require("./passport");
const cors=require('cors');
const authRoute=require("./routes/auth")
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const Login=require("./models/Login");
const Sign=require("./models/Sign");
const Admin=require("./models/Admin")

const app=express();
app.use(express.json());

mongoose.connect("mongodb+srv://rahul:rahul@hostelmanagement.suhce8t.mongodb.net/hostel?retryWrites=true&w=majority",{useNewUrlParser:true})

app.use(cookieSession(
    {name:"session",
    keys:["rahul"],
    maxAge:24*60*60*100}
));

app.post("/insert",async function(req,res){
    const mail=req.body.mail;
    const password=req.body.password;
    const newLogin=new Login({
        email:mail,
        password:password
    });
    res.send("Credentials saved");
    newLogin.save();
})


app.post("/insertSignUp",async function(req,res){
    const name=req.body.name;
    const mail=req.body.mail;
    const password=req.body.password;
    const newSignUp=new Sign({
        name:name,
        mail:mail,
        password:password
    })
    newSignUp.save();

})

app.post("/insertAdmin",async function(req,res){
    const name=req.body.name;
    const hostel=req.body.hostel;
    const issue=req.body.issue;
    const availableFrom=req.body.availableFrom;
    const availableTo=req.body.availableTo;
    const roomNumber=req.body.roomNumber;
    const phone=req.body.phone;
    const email=req.body.email;
    const descOfIssue=req.body.descOfIssue;
    const status=req.body.status;
    const complaintDate=req.body.complaintDate;
    const desk=req.body.desk;
    const statusOfComplaint=req.body.statusOfComplaint;
    const id=req.body.id;
    const newAdmin=new Admin({
        name:name,
        hostel:hostel,
        issue:issue,
        availableFrom:availableFrom,
        availableTo:availableTo,
        roomNumber:roomNumber,
        phone:phone,
        email:email,
        descOfIssue:descOfIssue,
        status:status,
        complaintDate:complaintDate,
        desk:desk,
        statusOfComplaint:statusOfComplaint,
        id:id
    });
    newAdmin.save();
})

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin:"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE",
    credentials:true,
}))

app.use("/auth",authRoute);

app.listen(5000,function(){
    console.log("Server has started on port 5000");
})