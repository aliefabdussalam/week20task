const initialState = {
    all: [],
    loadAll: false,
    errorAll: false,
    errorAllMessage: "err",
    detail: {},
    loadDetail: false,
    errorDetail: false,
    errorDetailMessage: "err",
}

const productReducer = (state=initialState, action) => {
    switch (action.type) {
        case "GET_ALL_PRODUCT_PENDING":
            return { ...state, loadAll: true}
        case "GET_ALL_PRODUCT_FULFILLED":
            return { ...state, loadAll: false, all: action.payload }
        case "GET_ALL_PRODUCT_REJECTED":
            return { ...state, loadAll: false, errorAll: true, errorAllMessage: action.payload }
        case "GET_DETAIL_PRODUCT_PENDING":
            return { ...state, loadDetail: true}
        case "GET_DETAIL_PRODUCT_FULFILLED":
            return { ...state, loadDetail: false, detail: action.payload}
        case "GET_DETAIL_PRODUCT_REJECTED":
            return { ...state, loadDetail: false, errorDetail: true, errorDetailMessage: action.payload}
        default:
            return state;
    }
}

export default productReducer