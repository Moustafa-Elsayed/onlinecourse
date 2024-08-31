import axios from "axios";
import Cookies from "js-cookie";
import { BaseUrl } from "@/lib/api/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const UpdateUserProfile = createAsyncThunk(
  "users/UpdateUserProfile",
  async ({  updatedData }, { rejectWithValue }) => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await axios.put(
        `${BaseUrl}/Users/complete-profile`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data; // Return the updated user data
    } catch (error) {
      console.error("Update User Profile failed:", error);
      return rejectWithValue(
        error.response?.data || "An unexpected error occurred"
      );
    }
  }
);

export const UpdateUserProfileRequestHandler = (builder) => {
  builder
    .addCase(UpdateUserProfile.pending, (state) => {
      state.status = "loading";
    })
    .addCase(UpdateUserProfile.fulfilled, (state, action) => {
      state.status = "succeeded";
      if (Array.isArray(state.users)) {
        const index = state.users.findIndex(
          (user) => user.id === action.payload.id
        );
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      } else {
        console.error("Expected state.users to be an array, but it is not.");
      }
    })
    .addCase(UpdateUserProfile.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
};
