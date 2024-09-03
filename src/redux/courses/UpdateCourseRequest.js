import axios from "axios";
import Cookies from "js-cookie";
import { BaseUrl } from "@/lib/api/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { showToast } from "@/components/shared/showToast";

export const updateCourse = createAsyncThunk(
  "courses/updateCourse",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        throw new Error("No token found");
      }
      const response = await axios.put(
        `${BaseUrl}/courses/${id}`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return response.data;
    } catch (error) {
      // Log detailed error
      console.error("Update course failed:", error.response?.data || error.message);
      console.error("Error details:", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const UpdateCoursesRequestHandler = (builder) => {
  builder
    .addCase(updateCourse.fulfilled, (state, action) => {
      // Ensure state.courses is an array before using map
      if (Array.isArray(state.courses)) {
        state.courses = state.courses.map(course =>
          course.id === action.payload.id ? action.payload : course
        );
      } else {
        console.error("state.courses is not an array:", state.courses);
      }
    })
    .addCase(updateCourse.pending, (state) => {
      state.loading = true;
    })
    .addCase(updateCourse.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
};

