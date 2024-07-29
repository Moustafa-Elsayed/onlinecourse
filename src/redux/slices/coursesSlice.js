import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courses: [],
  status: 'idle', 
  error: null,
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    fetchCoursesStart(state) {
      state.status = 'loading';
    },
    fetchCoursesSuccess(state, action) {
      state.status = 'succeeded';
      state.courses = action.payload;
    },
    fetchCoursesFailure(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { fetchCoursesStart, fetchCoursesSuccess, fetchCoursesFailure } = coursesSlice.actions;

export default coursesSlice.reducer;
