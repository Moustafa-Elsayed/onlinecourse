import { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "@/components/shared/CustomButton";
import theme from "@/styles/theme";
import CourseDialog from "./coursesComponents/CourseDialog";
import DeleteConfirmDialog from "./coursesComponents/DeleteConfirmDialog";
import CoursesTable from "./coursesComponents/CoursesTable";
import { fetchCourses } from "@/redux/courses/GetAllCoursesRequest";
import { deleteCourse } from "@/redux/courses/DeleteCoursesRequest";
import { addcourses } from "@/redux/courses/AddNewCourseRequest";
import { showToast } from "../shared/showToast";
import { updateCourse } from "@/redux/courses/UpdateCourseRequest";

const AdminCourses = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: "",
    subtitle: "",
    curriculum: [],
    duration: "",
    level: "",
    instructor: "",
    price: "", // Added price field
    photos: [],
    photoPreview: [],
  });
  const [editCourse, setEditCourse] = useState(null);
  const [courseToDelete, setCourseToDelete] = useState(null);
  const [courseTitleToDelete, setCourseTitleToDelete] = useState("");
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const handleOpenDialog = (course = null) => {
    if (course) {
      setEditCourse(course);
      setNewCourse({
        title: course.title,
        subtitle: course.subtitle,
        curriculum: course.curriculum || [],
        duration: course.duration,
        level: course.level,
        instructor: course.instructor,
        price: course.price || "", // Added price field
        photos: course.photos || [],
        photoPreview: course.photos || [],
      });
    } else {
      setEditCourse(null);
      setNewCourse({
        title: "",
        subtitle: "",
        curriculum: [],
        duration: "",
        level: "",
        instructor: "",
        price: "", // Added price field
        photos: [],
        photoPreview: [],
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => setOpenDialog(false);

  const handleOpenConfirmDialog = (course) => {
    setCourseToDelete(course);
    setCourseTitleToDelete(course.title);
    setOpenConfirmDialog(true);
  };

  const handleCloseConfirmDialog = () => {
    setCourseToDelete(null);
    setOpenConfirmDialog(false);
  };

  const handleAddOrUpdateCourse = () => {
    const formData = new FormData();
    formData.append("title", newCourse.title);
    formData.append("subtitle", newCourse.subtitle);
    formData.append("duration", newCourse.duration);
    formData.append("level", newCourse.level);
    formData.append("instructor", newCourse.instructor);
    formData.append("price", newCourse.price); // Added price field
    formData.append("curriculum", JSON.stringify(newCourse.curriculum));
    newCourse.photos.forEach((photo) => {
      formData.append("photos", photo);
    });

    if (editCourse) {
      dispatch(updateCourse({ id: editCourse._id, updatedData: formData }))
        .then(() => {
          showToast("Update course successful!", "success");
          handleCloseDialog();
          dispatch(fetchCourses());
        })
        .catch((error) => {
          showToast("Update course failed.", "error");
          handleCloseDialog();
          dispatch(fetchCourses());
        });
    } else {
      dispatch(addcourses(formData))
        .then(() => {
          showToast("Add course successful!","success");
          handleCloseDialog();
          dispatch(fetchCourses());
        })
        .catch(() => {
          showToast("Failed to add course.","error");
        });
    }
  };

  const handleDeleteCourse = async () => {
    if (courseToDelete) {
      try {
        await dispatch(deleteCourse(courseToDelete._id)).unwrap();
        showToast("Delete course successful!");
      } catch (error) {
        showToast("Failed to delete course.");
      } finally {
        handleCloseConfirmDialog();
        dispatch(fetchCourses());
      }
    } else {
      handleCloseConfirmDialog();
    }
  };
  console.log("newCourse", newCourse);

  return (
    <>
      <Typography variant="h4">Admin Panel: Manage Courses</Typography>
      <Box sx={{ textAlign: "right", mb: 2, mt: 2 }}>
        <CustomButton
          backgroundColor={theme.palette.secondary.main}
          title="Add New Course"
          onClick={() => handleOpenDialog()}
          color="white"
        />
      </Box>
      <CourseDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        newCourse={newCourse}
        setNewCourse={setNewCourse}
        editCourse={editCourse}
        handleAddOrUpdateCourse={handleAddOrUpdateCourse}
      />
      <DeleteConfirmDialog
        open={openConfirmDialog}
        handleClose={handleCloseConfirmDialog}
        courseTitleToDelete={courseTitleToDelete}
        handleDeleteCourse={handleDeleteCourse}
      />
      <CoursesTable
        courses={courses?.data}
        handleOpenDialog={handleOpenDialog}
        handleOpenConfirmDialog={handleOpenConfirmDialog}
      />
    </>
  );
};

export default AdminCourses;
