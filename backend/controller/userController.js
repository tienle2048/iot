const user = require('../model/user')
const pump= require('../services/pumpSevice')
const Course = require('../model/user')
const userService =require('../services/userSevice')


let handleLogin=async (req,res)=>{
    
    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
        return res.status(200).json({
            errCode: 1,
            message: 'Missing inputs parameter!'
        })
    }

    let userData = await userService.handleUserLogin(email, password)

    return res.status(200).json({
        errCode: userData.errCode,
        message: 'request okla',
        userdata: userData.data
    })
}


let handleSignup = async (req,res)=>{
    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
        return res.status(200).json({
            errCode: 1,
            message: 'Missing inputs parameter!'
        })
    }

    let userData = await userService.handleUserSignup(email, password)

    return res.status(200).json({
        errCode: userData.errCode,
        message: 'request okla',
        userdata: userData.data
    })
}

module.exports= {
        handleLogin: handleLogin,
        handleSignup:handleSignup
}
