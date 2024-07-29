import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const CourseDetail = () => {
  const router = useRouter();
  const { courseId } = router.query;
  console.log("Current courseId from router.query:", courseId);

  const courses = useSelector((state) => state.courses.courses.data);
  console.log("Courses from Redux store:", courses);

  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (courseId && courses?.length > 0) {
      const selectedCourse = courses.find((course) => course._id === courseId);
      setCourse(selectedCourse);
    }
  }, [courseId, courses]);

  if (!course) return <p>Loading...</p>;

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.duration}</p>
    </div>
  );
};

export default CourseDetail;
