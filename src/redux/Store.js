import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk';
import loginReducer from './slice/LoginSlince';
import userReducer from './slice/UserSlince'
import productReducer from './slice/ProductSlince'

export default configureStore({
    reducer: {
        login: loginReducer,
        user: userReducer,
        product : productReducer
    },
    middleware: [thunkMiddleware],

})
