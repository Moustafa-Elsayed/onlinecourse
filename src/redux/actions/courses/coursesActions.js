// coursesActions.js
import axios from 'axios';

import { BaseUrl } from '@/lib/api/constants';
import { fetchCoursesFailure, fetchCoursesStart, fetchCoursesSuccess } from '@/redux/slices/coursesSlice';

export const fetchCourses = () => async (dispatch) => {
  dispatch(fetchCoursesStart());
  try {
    const response = await axios.get(`${BaseUrl}/courses/`); 
    console.log('Fetched courses:', response.data); 
    dispatch(fetchCoursesSuccess(response.data));
  } catch (error) {
    console.log('Error fetching courses:', error); 
    dispatch(fetchCoursesFailure(error.toString()));
  }
};
