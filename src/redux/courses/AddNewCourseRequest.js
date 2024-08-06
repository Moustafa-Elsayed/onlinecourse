import axios from "axios";
import Cookies from "js-cookie";
import { BaseUrl } from "@/lib/api/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addcourses = createAsyncThunk(
  "courses/addcourses",
  async (courseData, { rejectWithValue }) => {
    try {
      const token = Cookies.get("token");
      console.log("Retrieved token from cookies:", token);

      if (!token) {
        throw new Error("No token found");
      }

      const response = await axios.post(`${BaseUrl}/courses`, courseData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", 
        },
      });

      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const addcoursesRequestHandler = (builder) => {
  builder
    .addCase(addcourses.pending, (state) => {
      state.status = "loading";
    })
    .addCase(addcourses.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.courses.push(action.payload); 
    })
    .addCase(addcourses.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    });
};
