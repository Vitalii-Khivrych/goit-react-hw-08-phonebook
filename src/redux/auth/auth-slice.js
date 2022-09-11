import authOperations from './auth-operations';

const { createSlice } = require('@reduxjs/toolkit');

const AUTH = 'auth';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: AUTH,
  initialState,
  extraReducers: {
    [authOperations.register.pending](state, { payload }) {
      state.isLoading = true;
    },
    [authOperations.register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authOperations.register.rejected](state, { payload }) {
      state.isLoading = false;
    },

    [authOperations.logIn.pending](state, { payload }) {
      state.isLoading = true;
    },
    [authOperations.logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authOperations.logIn.rejected](state, { payload }) {
      state.isLoading = false;
    },

    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, { payload }) {
      // console.log(payload);
      state.user = payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
