import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {isRegister: false, user: {}},
    reducers: {
        registerSuccess: (state, action) => {
            state.isRegister = true;
            state.user = action.payload.data;
        },
    },
});

export const {registerSuccess} = userSlice.actions;

export default userSlice.reducer;