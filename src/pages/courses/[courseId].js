import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import CourseSinglePage from "@/components/courses/courseSinglePage/CourseSinglePage";
import { fetchCourses } from "@/redux/actions/courses/coursesActions";

const CourseDetails = () => {
  const router = useRouter();
  const { courseId } = router.query;
  const dispatch = useDispatch();
  const {
    courses = [],
    loading,
    error,
  } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!router.isReady) {
    return <p>Loading...</p>;
  }

  // Ensure courses is an array
  const course =
    Array.isArray(courses) &&
    courses.find(
      (course) =>
        course._id && courseId && course._id.toString() === courseId.toString()
    );

  if (!course) {
    return <p>Course not found!</p>;
  }

  return (
    <div>
      <CourseSinglePage {...course} />
    </div>
  );
};

export default CourseDetails;
