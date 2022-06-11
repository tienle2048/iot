
const pump= require('../services/pumpSevice')
const sensor =require('../services/sensorService')
const dataUser = require('../services/userSevice')


let handlePump=(req,res)=>{
    pump.PumpApi(req.body.username,req.body.pump,req.body.key,req.body.value)
    res.send('post crud from server')
    //console.log(req.body)
    return req
}

let getDataPump=async (req,res)=>{
    data =await pump.GetPump(req.headers.username,req.headers.pump)
    res.send(data)
    return res
}

let getDataHumi=async (req,res)=>{
    data =await sensor.HumiApi(req.headers.username,req.headers.humi)
    res.send(data)
    return res
}

let getDataLight=async (req,res)=>{
    data =await sensor.LightApi(req.headers.username,req.headers.light)
    res.send(data)
    return res
}

let setNameSensor=async (req,res)=>{
    infosensor = {'humi':req.body.humi,'light':req.body.light,'pump':req.body.pump,'usernameAda':req.body.nameada,'iokey':req.body.io}
    data =await dataUser.updateDataUser(req.body.email,infosensor)
    res.send(data)
    return res
}



module.exports= {
        handlePump:handlePump,
        getDataPump:getDataPump,
        getDataHumi:getDataHumi,
        getDataLight:getDataLight,
        setNameSensor:setNameSensor
}
