import CourseSingleCard from "@/components/courses/coursesPage/CourseSingleCard";
import PageTitle from "@/components/shared/PageTitle";
import { CoursesDummyData } from "@/lib/dummyData/courses/courses";
import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";

const coursesData = CoursesDummyData;

const CoursesPage = () => {
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
          // <Link href={`/courses/${course.id}`}>
          <CourseSingleCard {...course} />
          // </Link>
        ))}
      </Box>
    </>
  );
};

export default CoursesPage;
