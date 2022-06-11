const fetch = require('node-fetch');
const FormData = require('form-data');



const HumiApi = async (username,huminame) => {
        console.log(username,huminame)
        res = await fetch('https://io.adafruit.com/api/v2/'+username+'/feeds/'+huminame+'/data?limit=10', {
            method: 'GET'
        })
        return res.json()
}

const LightApi = async (username,lightname) => {
    console.log(username,lightname)
    res = await fetch('https://io.adafruit.com/api/v2/'+username+'/feeds/'+lightname+'/data?limit=10', {
        method: 'GET'
    })
    return res.json()
}

module.exports= { HumiApi,LightApi };
