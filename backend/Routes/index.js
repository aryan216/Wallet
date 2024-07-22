const express=require("express");
const userRouter=require("./Routes/user")
const router=express.Router();
router.use("/user",userRouter)
module.exports=router;