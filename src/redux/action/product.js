import axios from "axios";
require('dotenv').config();

export const ACTION_GET_ALL_PRODUCT = () => {
    const token = localStorage.getItem('token')
    const headers = {
        token: token
    }
    return (dispatch) => {
        dispatch(allProductPending())
        axios.get(`${process.env.REACT_APP_API_URL}/product`, { headers }).then((response) => {
            dispatch(allProductFullfiled(response.data.data.data))
        }).catch((err) => {
            dispatch(allProductRejected())
        })
    }
}
const allProductPending = () => {
    return{
        type: "GET_ALL_PRODUCT_PENDING"
    }
}

const allProductFullfiled = (payload) => {
    return{
        type: "GET_ALL_PRODUCT_FULFILLED",
        payload
    }
}

const allProductRejected = () => {
    return{
        type: "GET_ALL_PRODUCT_REJECTED",
        payload: "Terjadi kesalahan"
    }
}
export const ACTION_GET_DETAIL_PRODUCT = (id) => {
    const token = localStorage.getItem('token')
    const headers = {
        token: token
    }
    return (dispatch) => {
        dispatch(allDetailPending())
        axios.get(`${process.env.REACT_APP_API_URL}/product/${id}`, { headers }).then((response) => {
            dispatch(allDetailFullfiled(response.data.data.data))
        }).catch((err) => {
            dispatch(allDetailRejected())
        })
    }
}
const allDetailPending = () => {
    return{
        type: "GET_DETAIL_PRODUCT_PENDING"
    }
}

const allDetailFullfiled = (payload) => {
    return{
        type: "GET_DETAIL_PRODUCT_FULFILLED",
        payload
    }
}

const allDetailRejected = () => {
    return{
        type: "GET_DETAIL_PRODUCT_REJECTED",
        payload: "Terjadi kesalahan"
    }
}
export const deletePrd = (id)=>{
    return new Promise((resolve, reject) => {
      axios.delete(`${process.env.REACT_APP_API_URL}/product/${id}`)
      .then((response) => {
        resolve(response.data)
      })
      .catch((err)=>{
        reject(err)
      })
    })
    
  }
  export const ACTION_GET_SEARCH = (query) => {
    const token = localStorage.getItem('token')
    const headers = {
        token: token
    }
    return (dispatch) => {
        dispatch(allProductPending())
        axios.get(`${process.env.REACT_APP_API_URL}/product?search=${query}`, { headers }).then((response) => {
            dispatch(allProductFullfiled(response.data.data.data))
        }).catch((err) => {
            dispatch(allProductRejected(err))
        })
    }
}
export const INSERT = (formData) => {
    return new Promise((resolve, reject) => {
        const token = localStorage.getItem('token')
        const headers = {
            'Content-Type': "multipart/form-data",
            token: token
        }
        axios.post(`${process.env.REACT_APP_API_URL}/product/`, formData, {headers})
        .then((response) => {
            console.log(response.data)
            resolve(response)
        }).catch((err) => {
            reject(err)
        })
    })
}

export const UPDATE = (formData, id) => {
    return new Promise((resolve, reject) => {
        const token = localStorage.getItem('token')
        const headers = {
            'Content-Type': "multipart/form-data",
            token: token
        }
        axios.put(`${process.env.REACT_APP_API_URL}/product/${id}`, formData, {headers})
        .then((response) => {
            console.log(response.data)
            resolve(response)
        }).catch((err) => {
            reject(err)
        })
    })
}

