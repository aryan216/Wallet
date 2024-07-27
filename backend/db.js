const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/paytm").then(console.log("connected"));

const userSchema=new mongoose.Schema({
    username:String,
    password:String,
    firstname:String,
    lastname:String
})

const accountSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required: true
    },
    balance:{
        type:Number,
        required:true
    }
});

const User=mongoose.model("User",userSchema);
const Account=mongoose.model("Account",accountSchema)


module.exports={
    User,Account
}