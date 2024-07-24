import CourseSingleCard from "@/components/courses/coursesPage/CourseSingleCard";
import PageTitle from "@/components/shared/PageTitle";
import { Box } from "@mui/material";
import React from "react";

const coursesData = [
  {
    id: 1,
    title: "Introduction to UI/UX Design",
    subtitle:
      "Learn the basics of UI/UX design and create stunning interfaces.",
    curriculum: [
      { number: "01", title: "Introduction to UI/UX Design" },
      { number: "02", title: "User Research and Personas" },
      { number: "03", title: "Wireframing and Prototyping" },
      { number: "04", title: "Visual Design and Branding" },
      { number: "05", title: "Usability Testing and Iteration" },
    ],
    duration: "4 weeks",
    level: "Beginner",
    instructor: " John Smith",
  },
  {
    id: 2,
    title: "Advanced Front-End Development",
    subtitle: "Deep dive into advanced front-end techniques and frameworks.",
    curriculum: [
      { number: "01", title: "Introduction to UI/UX Design" },
      { number: "02", title: "User Research and Personas" },
      { number: "03", title: "Wireframing and Prototyping" },
      { number: "04", title: "Visual Design and Branding" },
      { number: "05", title: "Usability Testing and Iteration" },
    ],
    duration: "6 weeks",
    level: "Intermediate",
    instructor: "Emily Johnson",
  },
  {
    id: 3,
    title: "Back-End Development with Node.js",
    subtitle: "Build scalable back-end systems using Node.js and Express.",
    curriculum: [
      { number: "01", title: "Introduction to UI/UX Design" },
      { number: "02", title: "User Research and Personas" },
      { number: "03", title: "Wireframing and Prototyping" },
      { number: "04", title: "Visual Design and Branding" },
      { number: "05", title: "Usability Testing and Iteration" },
    ],
    duration: "5 weeks",
    level: "Intermediate",
    instructor: "David Brown",
  },
];

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
          <CourseSingleCard
            key={course.id}
            title={course.title}
            subtitle={course.subtitle}
            courseSlug={course.title}
            curriculum={course.curriculum}
            duration={course.duration}
            level={course.level}
            instructor={course.instructor}
            courseId={course.id}
          />
        ))}
      </Box>
    </>
  );
};

export default CoursesPage;
