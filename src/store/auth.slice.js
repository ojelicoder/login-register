import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  fullName: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    register: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.fullName = action.payload.fullName;
    },
  },
});

export const { login, register } = authSlice.actions;

export default authSlice.reducer;
