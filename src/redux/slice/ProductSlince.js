import {createSlice} from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {searchValue: '', isGetData: false, data: []},
    reducers: {
        getAll: (state, action) => {
            state.isGetData = true;
            state.data = action.payload.data;
        },
    },
});

export const {getAll, search} = productSlice.actions;

export default productSlice.reducer;