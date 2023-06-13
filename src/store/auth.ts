import { createSlice } from "@reduxjs/toolkit";

interface AuthType {
  [key: string]: string | null | boolean;
}

const initialState: AuthType = {
  user: JSON.parse(localStorage.getItem("user") || "null") ?? false,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = action.payload;
    },

    logout: (state) => {
      localStorage.removeItem("user");
      state.user = false;
    },
  },
});

export const { login, logout } = auth.actions;

export default auth.reducer;
