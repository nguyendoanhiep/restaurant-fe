import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/counterSlice'
import thunkMiddleware from 'redux-thunk';
import userReducer from './slice/LoginSlince';


export default configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
    },
    middleware: [thunkMiddleware],

})
