import { createSlice } from "@reduxjs/toolkit";

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchCoursesStart: (state) => {
      state.loading = true;
    },
    fetchCoursesSuccess: (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    },
    fetchCoursesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addCourseStart: (state) => {
      state.loading = true;
    },
    addCourseSuccess: (state, action) => {
      state.loading = false;
      state.courses.push(action.payload);
    },
    addCourseFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchCoursesStart,
  fetchCoursesSuccess,
  fetchCoursesFailure,
  addCourseStart,
  addCourseSuccess,
  addCourseFailure,
} = coursesSlice.actions;

export default coursesSlice.reducer;
