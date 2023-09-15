import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk';
import userReducer from './slice/UserSlince'
import productReducer from './slice/ProductSlince'

export default configureStore({
    reducer: {
        user: userReducer,
        product : productReducer
    },
    middleware: [thunkMiddleware],

})
