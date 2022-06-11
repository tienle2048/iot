const mongoose = require('mongoose')

let connect=async ()=>{
    
    try{
        await mongoose.connect('mongodb://localhost:27017/smart-garden');
        console.log('connect ok')
    } 
    catch(error){
        console.log('connect fail')
    }
}

module.exports={connect};