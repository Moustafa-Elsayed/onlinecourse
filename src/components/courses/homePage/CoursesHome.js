import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import CourseCard from "./CourseCard";
import CustomButton from "@/components/shared/CustomButton";
import theme from "@/styles/theme";
import useButtonClickHandler from "@/hooks/useButtonClickHandler";
import { CoursesDummyData } from "@/lib/dummyData/courses/courses";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "@/redux/courses/GetAllCoursesRequest";

const CoursesHome = () => {
  const handleCoursesRoute = useButtonClickHandler("/courses");
  const dispatch = useDispatch();
  const { courses, status, error } = useSelector((state) => state.courses);
  const coursesData = courses?.data;
  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          mb: 5,
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
        {coursesData?.map((course, index) => (
          <Grid item key={index} xs={12} sm={6} md={6}>
            <CourseCard {...course} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CoursesHome;
