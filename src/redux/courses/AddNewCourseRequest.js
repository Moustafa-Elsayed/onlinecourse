import axios from "axios";
import Cookies from "js-cookie";
import { BaseUrl } from "@/lib/api/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Thunk to handle adding a course
export const addcourses = createAsyncThunk(
  "courses/addcourses",
  async (courseData, { rejectWithValue }) => {
    try {
      const token = Cookies.get("token");
      console.log("Retrieved token from cookies:", token);

      if (!token) {
        throw new Error("No token found");
      }

      // Send POST request to add the course
      const response = await axios.post(`${BaseUrl}/courses`, courseData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", 
        },
      });

      // Return the data from the response
      return response.data; 
    } catch (error) {
      console.error("Error adding course:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Handler to manage different states of the addcourses thunk
export const AddcoursesRequestHandler = (builder) => {
  builder
    .addCase(addcourses.pending, (state) => {
      state.status = "loading";
    })
    .addCase(addcourses.fulfilled, (state, action) => {
      state.status = "succeeded";
      // Assuming courses is an array in your state
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
