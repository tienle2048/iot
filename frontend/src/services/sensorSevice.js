import axios from 'axios'


const controllerPump = async (name, pump, key, value) => {
    const obj = {
        username: name,
        pump: pump,
        key: key,
        value: value
    };
    const data = Object.keys(obj)
        .map((key, index) => `${key}=${encodeURIComponent(obj[key])}`)
        .join('&');
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        data,
        url: 'http://localhost:8080/api/controllpump',
    };
    return await axios(options)
}

const getDataPump = async (name, pump) => {
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'username': name,
            'pump': pump
        },
        url: 'http://localhost:8080/api/pump',
    };
    return await axios(options)
}

const getDataHumi = async (name, humi) => {
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'username': name,
            'humi': humi
        },
        url: 'http://localhost:8080/api/humi',
    };
    return await axios(options)
}

const getDataLight = async (name, light) => {
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'username': name,
            'light': light
        },
        url: 'http://localhost:8080/api/light',
    };
    return await axios(options)
}

const handleUpdate =(email,humi,light,pump,nameada,io) => {
    let obj = {
        'email':email,
        'humi':humi,
        'light':light,
        'pump':pump,
        'nameada':nameada,
        'io':io
      };
    let data = Object.keys(obj)
        .map((key, index) => `${key}=${encodeURIComponent(obj[key])}`)
        .join('&');
    let options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded'
        },
        data,
        url: 'http://localhost:8080/api/update',
      };
    return axios(options)
}

export { controllerPump, getDataPump, getDataHumi, getDataLight,handleUpdate};