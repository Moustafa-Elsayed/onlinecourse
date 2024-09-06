import axios from "axios";
import Cookies from "js-cookie"; 
import { BaseUrl } from "@/lib/api/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";

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
          Authorization: `Bearer ${token}`, 
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

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
      state.error = action.payload; 
    });
};
