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