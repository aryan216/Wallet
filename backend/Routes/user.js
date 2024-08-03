const express=require("express")
const router=express.Router()
const zod=require("zod")
const jwt=require("jsonwebtoken")
const { User, Account}=require("../db")
const {JWT_SECRET}=require("../config")
const {authMiddleware}=require("../middleware")
const signupBody=zod.object({
    username:zod.string().email(),
    firstname:zod.string(),
    lastname:zod.string(),
    password:zod.string()
})

router.post("/signup",async (req,res)=>{
    const {success}=signupBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message:"email already exists/incorrectinputs"
        })
    }

    const existingUser= await User.findOne({
        usernamme:req.body.username
    })
    if(existingUser){
        return res.status(411).json({
            message:"email already exists/incorrect inputs"
        })
    }

    const dbuser=await User.create({
        username:req.body.username,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        password:req.body.password
    })
    const userId=User._id;

    await Account.create({
        userId,
        balance:1+Math.random()*10000
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

    const user=await User.findOne({
        username:req.body.username,
        password:req.body.password
    });

    if(user){
        const token=jwt.sign({
            userId:User._id
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

const updateBody= zod.object({
    password:zod.string(),
    firstname:zod.string(),
    lastname:zod.string()
})

router.put("/", authMiddleware , async(req,res)=>{
    const {success} =updateBody.safeParse(req.body);
    if(!success){
        res.status(411).json({
            message:"incorrect inputs/error while updating"
        })
    }
    await User.updateOne({
        id:req.userId
    })
    res.json({
        message:"details updated successfully"
    })
})  

router.get("/bulk", async(req,res)=>{
    const filter=req.query.filter || ""
    const users=await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })

})

module.exports=router;