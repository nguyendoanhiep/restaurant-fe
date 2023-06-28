import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk';
import userReducer from './slice/LoginSlince';


export default configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: [thunkMiddleware],

})
