import axios from "axios";
import Cookies from "js-cookie"; // Don't forget to import Cookies
import { BaseUrl } from "@/lib/api/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Fetch Courses with token in headers
export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async (_, { rejectWithValue }) => {
    try {
      const token = Cookies.get("token");

      if (!token) {
        throw new Error("No token found");
      }

      const response = await axios.get(`${BaseUrl}/courses/`, {
        headers: {
          Authorization: `Bearer ${token}`, // Pass the token in the headers
        },
      });
      return response.data;
    } catch (error) {
      // Return a custom error message with rejectWithValue
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Request handler for the courses
export const IndexCoursesRequestHandler = (builder) => {
  builder
    .addCase(fetchCourses.pending, (state) => {
      state.status = "loading";
    })
    .addCase(fetchCourses.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.courses = action.payload;
    })
    .addCase(fetchCourses.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload; // Use action.payload for a better error message
    });
};
