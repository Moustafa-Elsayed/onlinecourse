import { createSlice } from "@reduxjs/toolkit";
import { IndexCoursesRequestHandler } from "../courses/GetAllCoursesRequest";
import { DeleteCoursesRequestHandler } from "../courses/DeleteCoursesRequest";

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    IndexCoursesRequestHandler(builder);
    DeleteCoursesRequestHandler(builder)
      
  },
});

export const {} = coursesSlice.actions;

export default coursesSlice.reducer;  
