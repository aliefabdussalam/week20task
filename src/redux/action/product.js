import axios from "axios";

export const ACTION_GET_ALL_PRODUCT = () => {
    return (dispatch) => {
        dispatch(allProductPending())
        axios.get('http://localhost:8800/product').then((response) => {
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
    return (dispatch) => {
        dispatch(allDetailPending())
        axios.get(`http://localhost:8800/product/${id}`).then((response) => {
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
      axios.delete(`http://localhost:8800/product/${id}`)
      .then((response) => {
        resolve(response.data)
      })
      .catch((err)=>{
        reject(err)
      })
    })
    
  }