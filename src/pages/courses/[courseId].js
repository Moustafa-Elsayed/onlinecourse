import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCourses } from "@/redux/actions/courses/coursesActions";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

const CourseDetail = () => {
  const router = useRouter();
  const { courseId } = router.query;

  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses.data);

  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (!courses) {
      // Fetch courses if not already fetched
      dispatch(fetchCourses()); // Replace with your actual fetch action
    }

    if (courseId && courses?.length > 0) {
      const selectedCourse = courses.find((course) => course._id === courseId);
      setCourse(selectedCourse || null); // Set course or null if not found
    }
  }, [courseId, courses, dispatch]);

  if (!course)
    return (
      <>
        <LoadingSpinner />
      </>
    );

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.duration}</p>
    </div>
  );
};

export default CourseDetail;
