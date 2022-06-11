const user = require('../model/user')


let handleUserLogin=async (email,password)=>{
    let docs= await user.findOne({'email': email})
    if (docs) {
        if (docs.password==password){
            return {
                'errCode':0,
                'data': docs
            }
        }
        else {
            return {
                'errCode':2,
                'data': {}
            }
        }
    }
    else {
        return {
            'errCode':3,
            'data': {}
        }
    }
}

let handleUserSignup=async (email,password)=>{
    let docs= await user.findOne({'email': email})
    if (docs) {
        return {
            'errCode':2,
            'data': {}
        }
    }
    else {
        user.create({'email':email,'password':password})
        return {
            'errCode':0,
            'data': {}
        }
    }
}


let updateDataUser=async (email,data)=>{
    let docs= await user.findOneAndUpdate({'email': email},data)
    if (docs) {
        return {
            'errCode':0,
            'data': {}
        }
    }
    else {
        return {
            'errCode':2,
            'data': {}
        }
    }
}


module.exports= {
        handleUserLogin: handleUserLogin,
        handleUserSignup:handleUserSignup,
        updateDataUser:updateDataUser
}
