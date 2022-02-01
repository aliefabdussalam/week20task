import axios from "axios";
require('dotenv').config();

export const INSERT = (formdata) => {
    console.log(formdata)
    return new Promise((resolve, reject) => {
        const {header} = {
            'Content-Type': 'application/json'
        }
        axios.post(`${process.env.REACT_APP_API_URL}/register`, formdata, {header})
        .then((response) => {
            console.log(response.data)
            resolve(response.data)
        }).catch((err) => {
            reject(err)
        })
    })
}

export const LOGIN = (user) => {
    console.log(user)
    return new Promise((resolve, reject) => { 
        const {header} = {
            'Content-Type': 'application/json'
        }
        axios.post(`${process.env.REACT_APP_API_URL}/login`, user, {header})
        .then((response) => { 
            const token = response.data.data
            localStorage.setItem("token", token)
            resolve(response)
        }).catch((err) => {
            reject(err)
        })
    })
}