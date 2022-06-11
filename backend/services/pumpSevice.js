const fetch = require('node-fetch');
const FormData = require('form-data');



const PumpApi = async (username,pumpname,key,value) => {
        let form = new FormData();
        form.append('value', value);
        console.log('pumpapi')
        await fetch('https://io.adafruit.com/api/v2/'+username+'/feeds/'+pumpname+'/data', {
            method: 'POST',
            headers: {
                'X-AIO-Key': key
            },
            body:form
        })
}

const GetPump = async (username,pumpname) => {
    //console.log(username,pumpname,key)
    res = await fetch('https://io.adafruit.com/api/v2/'+username+'/feeds/'+pumpname+'/data?limit=10', {
        method: 'GET'
    })
    return res.json()
}

module.exports= { PumpApi,GetPump };
