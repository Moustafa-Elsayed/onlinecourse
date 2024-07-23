import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import CourseCard from "./CourseCard";
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
  // Add more courses here
];
const CoursesHome = () => {
  return (
    <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Our Courses
        </Typography>
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet consectetur. Turpis faucibus id et amet
          consectetur. Et in. Cras est dignissim lorem nibh. Ac cum porttitor
          risus in vel magna feugiat in arcu sit.
        </Typography>
        <Button variant="outlined" color="primary" sx={{ mb: 4 }}>
          View All
        </Button>
        <Grid container spacing={4}>
          {courses.map((course, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <CourseCard {...course} />
            </Grid>
          ))}
        </Grid>
      </Container>
  )
}

export default CoursesHome