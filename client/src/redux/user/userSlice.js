import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
  accessToken: null,
  resetToken: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Login-Sign-Up
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      // state.currentUser = action.payload;
      state.currentUser = action.payload.currentUser;
      state.accessToken = action.payload.accessToken; 
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Update User
    updateStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Delete user account
    deleteUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    deleteUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    forgotInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    
    forgotSuccess: (state, action) => {
      state.currentUser = action.payload.currentUser;
      state.resetToken = action.payload.resetToken;
      state.loading = false;
      state.error = null;
    },

    forgotInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Signout
    signoutSuccess: (state) => {
      state.currentUser = null;
      state.accessToken = null;
      state.error = null;
      state.loading = false;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateStart,
  updateSuccess,
  updateFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signoutSuccess,
  forgotInStart,
  forgotSuccess,
  forgotInFailure
} = userSlice.actions;

export default userSlice.reducer;
