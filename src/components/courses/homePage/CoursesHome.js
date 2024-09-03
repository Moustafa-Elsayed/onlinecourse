import { Box, Grid, Typography, CircularProgress, Alert } from "@mui/material";
import React, { useEffect } from "react";
import CourseCard from "./CourseCard";
import CustomButton from "@/components/shared/CustomButton";
import theme from "@/styles/theme";
import useButtonClickHandler from "@/hooks/useButtonClickHandler";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "@/redux/courses/GetAllCoursesRequest";
import { addItem } from "@/redux/slices/cartSlice";
import { useRouter } from "next/router";

const CoursesHome = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleCoursesRoute = useButtonClickHandler("/courses");
  const { courses, status, error } = useSelector((state) => state.courses);
  const coursesData = courses?.data;

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const handleAddToCart = (course) => {
    dispatch(addItem(course));
  };
  const handleViewDetails = (courseId) => {
    router.push(`/courses/${courseId}`);
  };

  return (
    <Box>
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
          <Typography variant="h4" color="textSecondary">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </Typography>
        </Box>
        <CustomButton
          title={"View All Courses"}
          backgroundColor={theme.palette.primary.light}
          border="1px solid #e9e3e3"
          onClick={handleCoursesRoute}
        />
      </Box>
     
      
        <Grid container spacing={4}>
          {coursesData?.map((course, index) => (
            <Grid item key={index} xs={12} sm={6} md={6}>
              <CourseCard
                {...course}
                addToCart={handleAddToCart}
                handleViewDetails={() => handleViewDetails(course._id)} // Pass course ID dynamically
              />
            </Grid>
          ))}
        </Grid>
      
    </Box>
  );
};

export default CoursesHome;
