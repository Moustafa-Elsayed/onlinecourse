import axios from "axios";
import Cookies from "js-cookie";
import { BaseUrl } from "@/lib/api/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const addcourses = createAsyncThunk(
  "courses/addcourses",
  async (courseData, { rejectWithValue }) => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        throw new Error("No token found");
      } 
      const response = await axios.post(`${BaseUrl}/courses`, courseData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      console.error(
        "Error adding course:",
        error.response?.data || error.message
      );
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const AddcoursesRequestHandler = (builder) => {
  builder
    .addCase(addcourses.pending, (state) => {
      state.status = "loading";
    })
    .addCase(addcourses.fulfilled, (state, action) => {
      state.status = "succeeded";
      if (Array.isArray(state.courses)) {
        state.courses.push(action.payload);
      } else {
        console.error("State 'courses' is not an array.");
      }
    })
    .addCase(addcourses.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
};
