import { createSlice } from "@reduxjs/toolkit";
import { IndexUsersRequestHandler } from "../users/GetAllUsersRequest";
import { DeleteUserssRequestHandler } from "../users/DeleteCoursesRequest";
import { UpdateUserProfileRequestHandler } from "../users/UpdateUserProfile";

const usersSlice = createSlice({
  name: "users",
  initialState: {
  },
  reducers: {},
  extraReducers: (builder) => {
    IndexUsersRequestHandler(builder);
    DeleteUserssRequestHandler(builder);
    UpdateUserProfileRequestHandler(builder)

  },
});

export const {} = usersSlice.actions;

export default usersSlice.reducer;
