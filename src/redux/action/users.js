import axios from "axios";

export const INSERT = (formdata) => {
    console.log(formdata)
    return new Promise((resolve, reject) => {
        const {header} = {
            'Content-Type': 'application/json'
        }
        axios.post(`http://localhost:8800/register`, formdata, {header})
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
        axios.post(`http://localhost:8800/login`, user, {header})
        .then((response) => {
            const token = response.data.data
            console.log(response)
            localStorage.setItem("token", token)
            
        }).catch((err) => {
            reject(err)
        })
    })
}