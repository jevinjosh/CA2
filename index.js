const express=require("express");


const app=express();
app.use(express.json());
const port=3000;

const Users=({
    name:{
        type:String,
        requierd:true,
    },
    email:{
        type:String,
        required:true,
    },
    contact:{
        type:Number,
        unique:true,
        required:true,
    },
    userId:{
        type:String,
        requires:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
});

app.post("/users",async(req,res)=>{
    try{
    const user=new Users({
        name:req.body.name,
        email:req.body.email,
        contact:req.body.contact,
        userId:req.body.userId,
        password:req.body.password,
    });
    await user.save();
    if(!user){
        res.status(404).json({message:"User not found",user });
        }res.json({message:"User found",user});
   
}catch(err){
    res.status(400).json({message:"error fetching user",err});
}
})

app.listen(3000,()=>{
   console.log("server is running on http://localhost:3000");
})

