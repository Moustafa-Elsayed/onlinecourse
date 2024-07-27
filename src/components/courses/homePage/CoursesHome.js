import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import CourseCard from "./CourseCard";
import CustomButton from "@/components/shared/CustomButton";
import theme from "@/styles/theme";
import useButtonClickHandler from "@/hooks/useButtonClickHandler";
const courses = [
  {
    image: "path/to/image1.jpg",
    title: "Web Design Fundamentals",
    duration: "4 Weeks",
    level: "Beginner",
    instructor: "John Smith",
    description:
      "Learn the basics of web design including HTML, CSS, and responsive design principles...",
  },
  {
    image: "path/to/image2.jpg",
    title: "UI/UX Design",
    duration: "6 Weeks",
    level: "Intermediate",
    instructor: "Emily Johnson",
    description:
      "Explore the world of creating intuitive user interfaces (UI) and user experiences (UX)...",
  },
];
const CoursesHome = () => {
  const handleCoursesRoute = useButtonClickHandler("/courses");
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ flexGrow: 1, maxWidth: "80%", mb: 1 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 }}>
            Our Courses
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </Typography>
        </Box>

        <CustomButton
          title={"View Course"}
          backgroundColor={theme.palette.primary.light}
          border="1px solid #e9e3e3"
          onClick={handleCoursesRoute}
        />
      </Box>
      <Grid container spacing={4}>
        {courses.map((course, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <CourseCard {...course} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CoursesHome;
