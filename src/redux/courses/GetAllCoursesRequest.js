import axios from "axios";
import { BaseUrl } from "@/lib/api/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const response = await axios.get(`${BaseUrl}/courses/`);
    return response.data;
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
      state.error = action.error.message;
    });
};
