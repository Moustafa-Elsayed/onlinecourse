import axios from "axios";
import { BaseUrl } from "@/lib/api/constants";
import {
  addCourseStart,
  addCourseSuccess,
  addCourseFailure,
} from "@/redux/slices/coursesSlice";

export const addCourse = (courseData) => async (dispatch) => {
  dispatch(addCourseStart());
  try {
    const response = await axios.post(`${BaseUrl}/courses/`, courseData);
    dispatch(addCourseSuccess(response.data));
  } catch (error) {
    console.log("Error adding course:", error);
    dispatch(addCourseFailure(error.toString()));
  }
};
