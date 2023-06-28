import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk';
import loginReducer from './slice/LoginSlince';
import userReducer from './slice/UserSlince'


export default configureStore({
    reducer: {
        login: loginReducer,
        user: userReducer
    },
    middleware: [thunkMiddleware],

})
