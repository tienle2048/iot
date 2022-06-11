import axios from 'axios'

const handleLoginApi =(email, password) => {
    let obj = {
        'email':email,
        'password':password
      };
    let data = Object.keys(obj)
        .map((key, index) => `${key}=${encodeURIComponent(obj[key])}`)
        .join('&');
    let options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded'
        },
        data,
        url: 'http://localhost:8080/api/login',
      };
    return axios(options)
}

const handleSignupApi = (email, password) => {
    let obj = {
        'email':email,
        'password':password
    };
    let data = Object.keys(obj)
        .map((key, index) => `${key}=${encodeURIComponent(obj[key])}`)
        .join('&');
    let options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded'
        },
        data,
        url: 'http://localhost:8080/api/signup',
      };
    return axios(options)
}

export { handleLoginApi ,handleSignupApi};