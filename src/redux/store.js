import { createStore, combineReducers, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import productReducer from './reducers/product'



const reducers = combineReducers({
    product: productReducer,
    
})
const middleware = applyMiddleware(thunk, logger)

const store = createStore(reducers, middleware)

export default store 