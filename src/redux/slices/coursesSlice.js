import { createSlice } from "@reduxjs/toolkit";
import { IndexCoursesRequestHandler } from "../courses/GetAllCoursesRequest";
import { DeleteCoursesRequestHandler } from "../courses/DeleteCoursesRequest";
import { UpdateCoursesRequestHandler } from "../courses/UpdateCourseRequest";
import { AddcoursesRequestHandler } from "../courses/AddNewCourseRequest";

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
    AddcoursesRequestHandler(builder)
    UpdateCoursesRequestHandler(builder)
      
  },
});

export const {} = coursesSlice.actions;

export default coursesSlice.reducer;  
