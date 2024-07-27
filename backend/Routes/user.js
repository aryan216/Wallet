const express=require("express")
const router=express.Router()
const zod=require("zod")
const { user}=require("../db")
const {JWT_SECRET}=require("../confi")

const signupBody=zod.object({
    username:zod.string().email(),
    firstname:zod.string(),
    lastname:zod.string(),
    password:zod.string()
})

router.post("signup",async (req,res)=>{
    const {success}=signupBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message:"email already exists/incorrectinputs"
        })
    }

    const existingUser= await user.findOne({
        usernamme:req.body.username
    })
    if(existingUser){
        return res.status(411).json({
            message:"email already exists/incorrect inputs"
        })
    }

    const dbuser=await user.create({
        username:req.body.username,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        password:req.body.password
    })

    const token=jwt.sign({
        userId:dbuser._id
    },JWT_SECRET)

    res.json({
        message:"user created successfully",
        token: token
    })
})

const signinBody=zod.object({
    username:zod.string().email(),
    password:zod.string()
})

router.post("/signin", async(req,res)=>{
    const {success}=signinBody.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            message:"incorrect inputs"
        })
    }

    const user=await user.findOne({
        username:req.body.username,
        password:req.body.password
    });

    if(user){
        const token=jwt.sign({
            userId:user._id
        },JWT_SECRET)

        res.json({
            token:token
        })
        return
    }
    res.status(411).json({
        message:"error while logging in"
    })

})

module.exports=router;