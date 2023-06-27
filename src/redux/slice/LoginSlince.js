import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'user',
  initialState: { isLoggedIn: false, token: null },
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.data;
      localStorage.setItem('Token', JSON.stringify('Bearer '+state.token));

    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      localStorage.removeItem('Token');
    },
  },
});

export const { loginSuccess, logout } = loginSlice.actions;

export default loginSlice.reducer;