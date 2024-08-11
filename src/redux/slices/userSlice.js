import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: null,
    avatar: null,
    token: null,
    role: null,
  },
  reducers: {
    setUserData: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearUserData: () => ({
      username: null,
      avatar: null,
      token: null,
      role: null,
    }),
  },
});

export const { setUserData, clearUserData } = userSlice.actions;

export default userSlice.reducer;
