const mongoose =require('mongoose')
const Schema =mongoose.Schema

const user =new Schema({
    email:{type:String,default:"oklaaaa"},
    password:{type:String,default:""},
    iokey:{type:String,default:""},
    usernameAda:{type:String,default:""},
    humi:{type:String,default:""},
    light:{type:String,default:""},
    pump:{type:String,default:""}
})


module.exports= mongoose.model('users',user)