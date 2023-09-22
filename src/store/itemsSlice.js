import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { getCookie } from "../utils/cookies";

const initialState = {
  isLoading: false,
  isLoggedIn: getCookie("logged_in"),
  user: {},
};

const itemsSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = !state.loading;
    },
    setLoggedIn: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
  extraReducers: {},
});

export const { setLoading, setLoggedIn, setUser } = itemsSlice.actions;

export default itemsSlice.reducer;
