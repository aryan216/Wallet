const express=require("express");
const userRouter=require("./Routes/user");
const accountRouter=require("./Routes/account")
const router=express.Router();
router.use("/user",userRouter)
router.use("account",accountRouter)
module.exports=router;