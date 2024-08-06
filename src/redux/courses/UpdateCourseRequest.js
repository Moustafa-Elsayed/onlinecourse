import axios from "axios";
import Cookies from "js-cookie";
import { BaseUrl } from "@/lib/api/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateCourse = createAsyncThunk(
  "courses/updateCourse",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const token = Cookies.get("token");
      console.log("Retrieved token from cookies:", token);

      if (!token) {
        throw new Error("No token found");
      }

      console.log("Making PUT request to:", `${BaseUrl}/courses/${id}`);

      const response = await axios.put(
        `${BaseUrl}/courses/${id}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Update course failed:", error.response || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const UpdateCoursesRequestHandler = (builder) => {
  builder
    .addCase(updateCourse.pending, (state) => {
      state.status = "loading";
    })
    .addCase(updateCourse.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.courses = state.courses.map((course) =>
        course.id === action.payload.id ? action.payload : course
      );
    })
    .addCase(updateCourse.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
};
