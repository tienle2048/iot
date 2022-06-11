const express = require("express");
const systemcontroller =  require("../controller/systemcontroller")
const usercontroller =  require("../controller/userController")

let router = express.Router();
let inittestrouter=(app)=>{
    router.post('/login',usercontroller.handleLogin)
    router.post('/signup',usercontroller.handleSignup)

    //tra ve gia tri moi nhat va 10 gt gan nhat
    router.get('/humi',systemcontroller.getDataHumi)
    router.get('/light',systemcontroller.getDataLight)
    router.get('/pump',systemcontroller.getDataPump)
    router.post('/update',systemcontroller.setNameSensor)


    router.post('/controllpump',systemcontroller.handlePump)


    return app.use('/api',router)
}

module.exports = inittestrouter;