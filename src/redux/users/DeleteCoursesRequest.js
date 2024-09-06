import axios from "axios";
import Cookies from "js-cookie";
import { BaseUrl } from "@/lib/api/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteUsers = createAsyncThunk(
  "users/deleteUsers",
  async (id, { rejectWithValue }) => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await axios.delete(`${BaseUrl}/Users/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return id;
    } catch (error) {
      console.error("Delete Users failed:", error);
      return rejectWithValue(
        error.response?.data || "An unexpected error occurred"
      );
    }
  }
);

export const DeleteUserssRequestHandler = (builder) => {
  builder
    .addCase(deleteUsers.pending, (state) => {
      state.status = "loading";
    })
    .addCase(deleteUsers.fulfilled, (state, action) => {
      state.status = "succeeded";
      if (Array.isArray(state.users)) {
        state.users = state.users.filter(
          (Users) => Users.id !== action.payload
        );
      } else {
        console.error("Expected state.Userss to be an array, but it is not.");
      }
    })
    .addCase(deleteUsers.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
};
