const express=require("express")
const app=express()
const cors=require("cors")
const port=2005
const bodyParser=require("body-parser")
const mongoose =require("mongoose")
const register=require("./registerschema.js")

app.use(bodyParser.urlencoded({
    extended:true
}))
 
app.use(bodyParser.json())

app.use(cors())
mongoose.connect("mongodb+srv://sesirajnaidu:sesiraj2003@cluster0.iuzriy4.mongodb.net/firstdb?retryWrites=true&w=majority")
.then(()=>{
    console.log("connection estabished")
})
.catch((err)=>{
    console.log(err)
})
app.get("/",(req,res)=>{
    res.send("hello there today is a pleasent day")
})
app.post("/register",(req,res)=>{
    //const {email,passcode}=req.body;
    const email="user1@gmail.com",passcode="2003"
    const newFrontendUser= new register({
        username:email,
        password:passcode
    })
    newFrontendUser.save()
})
app.listen(port,()=>console.log("server 2005 has started"))