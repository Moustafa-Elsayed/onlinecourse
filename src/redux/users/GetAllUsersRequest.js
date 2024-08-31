import axios from "axios";
import Cookies from "js-cookie"; // Don't forget to import Cookies
import { BaseUrl } from "@/lib/api/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Fetch Users with token in headers
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const token = Cookies.get("token");

      if (!token) {
        throw new Error("No token found");
      }
      const response = await axios.get(`${BaseUrl}/users/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(
        "Error fetching users:",
        error.response?.data || error.message
      );
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Request handler for the users
export const IndexUsersRequestHandler = (builder) => {
  builder
    .addCase(fetchUsers.pending, (state) => {
      state.status = "loading";
    })
    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.users = action.payload;
    })
    .addCase(fetchUsers.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
};
