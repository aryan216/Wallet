const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/paytm").then(console.log("connected"));

const userSchema=new mongoose.Schema({
    username:String,
    password:String,
    firstname:String,
    lastname:String
})

const User=mongoose.model("user",userSchema);

module.exports={
    User
}