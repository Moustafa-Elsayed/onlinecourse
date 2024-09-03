import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import PageTitle from "@/components/shared/PageTitle";
import Grid from "@mui/material/Grid";
import CourseCard from "@/components/courses/courseSinglePage/CourseCard";
import Image from "next/image";
import { fetchCourses } from "@/redux/courses/GetAllCoursesRequest";
import ContainerImage from "../../../public/Image/Container.webp";
import CustomButton from "@/components/shared/CustomButton";
import theme from "@/styles/theme";
import { addItem } from "@/redux/slices/cartSlice";
import { Box } from "@mui/material";

const CourseDetail = () => {
  const coursess = [
    {
      number: "01",
      title: "Introduction to UI/UX Design",
      lessons: [
        {
          name: "Understanding UI/UX Design Principles",
          number: "01",
          duration: "45 Minutes",
        },
        {
          name: "Importance of User-Centered Design",
          duration: "1 Hour",
          number: "02",
        },
        {
          name: "The Role of UI/UX Design in Product Development",
          duration: "45 Minutes",
          number: "03",
        },
      ],
    },
    {
      number: "02",
      title: "Introduction to UI/UX Design",
      lessons: [
        {
          name: "Understanding UI/UX Design Principles",
          number: "01",
          duration: "45 Minutes",
        },
        {
          name: "Importance of User-Centered Design",
          duration: "1 Hour",
          number: "02",
        },
        {
          name: "The Role of UI/UX Design in Product Development",
          duration: "45 Minutes",
          number: "03",
        },
      ],
    },
    {
      number: "03",
      title: "Introduction to UI/UX Design",
      lessons: [
        {
          name: "Understanding UI/UX Design Principles",
          number: "01",
          duration: "45 Minutes",
        },
        {
          name: "Importance of User-Centered Design",
          duration: "1 Hour",
          number: "02",
        },
        {
          name: "The Role of UI/UX Design in Product Development",
          duration: "45 Minutes",
          number: "03",
        },
      ],
    },
  ];

  const router = useRouter();
  const { courseId } = router.query;
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses.data);
  const [course, setCourse] = useState(null);
  useEffect(() => {
    if (!courses) {
      dispatch(fetchCourses());
    }
    if (courseId && courses?.length > 0) {
      const selectedCourse = courses.find((course) => course._id === courseId);
      setCourse(selectedCourse || null);
    }
  }, [courseId, courses, dispatch]);

  if (!course) {
    return <LoadingSpinner />;
  }
  const handleAddToCart = () => {
    dispatch(
      addItem({
        _id: course._id,
        title: course.title,
        duration: course.duration,
        level: course.level,
        instructor: course.instructor,
        description: course.description,
        subtitle: course.subtitle,
        photos: course.photos,
        price: course.price,
        quantity: 1,
      })
    );
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mb: 5,
        }}
      >
        <CustomButton
          title={"Get It Now"}
          backgroundColor={theme.palette.primary.light}
          width="20%"
          fontWeight={"bold"}
          border="1px solid #e7e4e4"
          onClick={handleAddToCart}
          loading={true}
        />
      </Box>

      <PageTitle title={course.title} subTitle={course.subtitle} />

      <Image
        src={ContainerImage}
        alt="Course Image"
        layout="responsive"
        width={200}
        height={200}
      />

      <Grid container spacing={2} mt={5}>
        {coursess.map((course, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <CourseCard {...course} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CourseDetail;
