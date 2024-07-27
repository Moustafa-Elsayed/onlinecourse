import { useRouter } from "next/router";
import CourseSingleCard from "@/components/courses/coursesPage/CourseSingleCard";
import { CoursesDummyData } from "@/lib/dummyData/courses/courses";
import CourseSinglePage from "@/components/courses/courseSinglePage/CourseSinglePage";

const CourseDetails = () => {
  const router = useRouter();
  const { courseId } = router.query;

  if (!router.isReady) {
    return <p>Loading...</p>;
  }

  console.log("Course ID:", courseId); // Log the courseId
  console.log("Courses Data:", CoursesDummyData); // Log the courses data

  // Ensure the ID is converted to the right type if necessary
  const course = CoursesDummyData.find(
    (course) => course.id.toString() === courseId
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
