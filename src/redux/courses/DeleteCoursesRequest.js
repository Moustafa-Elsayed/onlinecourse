import axios from "axios";
import Cookies from "js-cookie";
import { BaseUrl } from "@/lib/api/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteCourse = createAsyncThunk(
  "courses/deleteCourse",
  async (id, { rejectWithValue }) => {
    try {
      const token = Cookies.get("token");
      console.log("Retrieved token from cookies:", token);

      if (!token) {
        throw new Error("No token found");
      }

      console.log("Making DELETE request to:", `${BaseUrl}/courses/${id}`);

      const response = await axios.delete(`${BaseUrl}/courses/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Delete course response:", response);
      return id;
    } catch (error) {
      console.error("Delete course failed:", error.response || error.message);
      return rejectWithValue(error.response?.data || error.message);
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
      state.courses = state.courses.filter(
        (course) => course.id !== action.payload
      );
    })
    .addCase(deleteCourse.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
};
