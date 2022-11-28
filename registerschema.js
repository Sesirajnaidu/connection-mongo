const mongoose=require("mongoose")

const newUserSchema={
    Username:String,
    password:String,

}
const register=mongoose.model("students",newUserSchema)

module.exports=register