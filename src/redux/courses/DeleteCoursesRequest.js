import axios from "axios";
import Cookies from "js-cookie";
import { BaseUrl } from "@/lib/api/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteCourse = createAsyncThunk(
  "courses/deleteCourse",
  async (id, { rejectWithValue }) => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await axios.delete(`${BaseUrl}/courses/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return id;
    } catch (error) {
      console.error("Delete course failed:", error); 
      return rejectWithValue(error.response?.data || "An unexpected error occurred");
    }
  }
);


export const DeleteCoursesRequestHandler = (builder) => {
  builder
    .addCase(deleteCourse.pending, (state) => {
      state.status = "loading";
    })
    .addCase(deleteCourse.fulfilled, (state, action) => {
      state.status = "succeeded";
      if (Array.isArray(state.courses)) {
        state.courses = state.courses.filter(
          (course) => course.id !== action.payload
        );
      } else {
        console.error("Expected state.courses to be an array, but it is not.");
      }
    })
    .addCase(deleteCourse.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
};

