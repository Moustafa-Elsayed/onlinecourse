import CourseSingleCard from "@/components/courses/coursesPage/CourseSingleCard";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import PageTitle from "@/components/shared/PageTitle";
import { CoursesDummyData } from "@/lib/dummyData/courses/courses";
import { fetchCourses } from "@/redux/actions/courses/coursesActions";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CoursesPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const { courses, status, error } = useSelector((state) => state.courses);
  const coursesData = courses?.data || CoursesDummyData;

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  if (status === "loading")
    return (
      <>
        <LoadingSpinner isLoading={isLoading} />
      </>
    );
  if (status === "failed") return <div>Error: {error}</div>;

  return (
    <>
      <PageTitle
        title={"Online Courses on Design and Development"}
        subTitle={
          "Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey."
        }
      />
      <Box sx={{ display: "flex", gap: 3, flexDirection: "column" }}>
        {coursesData.map((course) => (
          <CourseSingleCard {...course} />
        ))}
      </Box>
    </>
  );
};

export default CoursesPage;
