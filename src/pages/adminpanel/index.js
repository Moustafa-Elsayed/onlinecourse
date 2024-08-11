import { useEffect, useState } from "react";
import {
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { showToast } from "@/components/shared/showToast";
import CustomButton from "@/components/shared/CustomButton";
import theme from "@/styles/theme";
import CustomInput from "@/components/shared/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "@/redux/courses/GetAllCoursesRequest";
import { deleteCourse } from "@/redux/courses/DeleteCoursesRequest";
import { addcourses } from "@/redux/courses/AddNewCourseRequest";
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
    photo: null, // Initialize as null for file handling
  });
  const [editCourse, setEditCourse] = useState(null);
  const [courseToDelete, setCourseToDelete] = useState(null);
  const [courseTitleToDelete, setCourseTitleToDelete] = useState("");

  const dispatch = useDispatch();
  const { courses, status, error } = useSelector((state) => state.courses);

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
        photo: course.photo || null, // Set the photo if available
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
        photo: null, // Reset the photo
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
    formData.append("curriculum", JSON.stringify(newCourse.curriculum));
    if (newCourse.photo) {
      formData.append("photo", newCourse.photo); // Append the file
    }

    if (editCourse) {
      dispatch(updateCourse({ id: editCourse._id, updatedData: formData }))
        .then(() => {
          showToast("Update course successful!");
          handleCloseDialog();
          dispatch(fetchCourses());
        })
        .catch(() => {
          showToast("Update course failed.");
          handleCloseDialog();
          dispatch(fetchCourses());
        });
    } else {
      dispatch(addcourses(formData))
        .then(() => {
          showToast("Add course successful!");
          handleCloseDialog();
          dispatch(fetchCourses());
        })
        .catch(() => {
          showToast("Failed to add course.");
        });
    }
  };

  const handleDeleteCourse = async () => {
    if (courseToDelete) {
      try {
        await dispatch(deleteCourse(courseToDelete._id)).unwrap();
        showToast("Delete course successful!");
        handleCloseConfirmDialog();
        dispatch(fetchCourses());
      } catch (error) {
        showToast("Failed to delete course.");
        dispatch(fetchCourses());
        handleCloseConfirmDialog();
      }
    } else {
      handleCloseConfirmDialog();
    }
  };

  const handleChangeCurriculum = (index, field, value) => {
    const updatedCurriculum = newCourse.curriculum.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );

    setNewCourse((prevCourse) => ({
      ...prevCourse,
      curriculum: updatedCurriculum,
    }));
  };

  const handleAddCurriculumItem = () => {
    setNewCourse((prevCourse) => ({
      ...prevCourse,
      curriculum: [
        ...prevCourse.curriculum,
        {
          number: prevCourse.curriculum.length + 1, // Set number based on the length of the curriculum array
          title: "",
          duration: "",
          level: "",
          instructor: "",
        },
      ],
    }));
  };

  const handleRemoveCurriculumItem = (index) => {
    setNewCourse((prevCourse) => {
      const updatedCurriculum = prevCourse.curriculum
        .filter((_, i) => i !== index)
        .map((item, i) => ({ ...item, number: i + 1 })); // Update numbers after removal

      return {
        ...prevCourse,
        curriculum: updatedCurriculum,
      };
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewCourse((prevCourse) => ({
        ...prevCourse,
        photo: file, // Set the file object
      }));
      // If you want to show a preview of the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewCourse((prevCourse) => ({
          ...prevCourse,
          photoPreview: reader.result, // Set the preview URL
        }));
      };
      reader.readAsDataURL(file);
    }
  };

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

      {/* Add/Edit Course Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth>
        <DialogTitle>
          {editCourse ? "Edit Course" : "Add New Course"}
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleCloseDialog}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <CustomInput
            label="Course Title"
            value={newCourse.title}
            onChange={(e) =>
              setNewCourse({ ...newCourse, title: e.target.value })
            }
            fullWidth
          />
          <CustomInput
            label="Course Subtitle"
            value={newCourse.subtitle}
            onChange={(e) =>
              setNewCourse({ ...newCourse, subtitle: e.target.value })
            }
            fullWidth
          />
          <CustomInput
            label="Duration"
            value={newCourse.duration}
            onChange={(e) =>
              setNewCourse({ ...newCourse, duration: e.target.value })
            }
            fullWidth
          />
          <CustomInput
            label="Level"
            value={newCourse.level}
            onChange={(e) =>
              setNewCourse({ ...newCourse, level: e.target.value })
            }
            fullWidth
          />
          <CustomInput
            label="Instructor"
            value={newCourse.instructor}
            onChange={(e) =>
              setNewCourse({ ...newCourse, instructor: e.target.value })
            }
            fullWidth
          />
          <input
            accept="image/*"
            type="file"
            onChange={handleImageChange}
            style={{ marginBottom: "10px" }}
          />
          {newCourse.photoPreview && (
            <Box sx={{ mb: 2 }}>
              <img
                src={newCourse.photoPreview}
                alt="Course"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
          )}
          {newCourse.curriculum.map((item, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography>Curriculum Item {item.number}</Typography>
              <CustomInput
                label="Title"
                value={item.title}
                onChange={(e) =>
                  handleChangeCurriculum(index, "title", e.target.value)
                }
                fullWidth
              />
              <CustomInput
                label="Duration"
                value={item.duration}
                onChange={(e) =>
                  handleChangeCurriculum(index, "duration", e.target.value)
                }
                fullWidth
              />
              <CustomInput
                label="Level"
                value={item.level}
                onChange={(e) =>
                  handleChangeCurriculum(index, "level", e.target.value)
                }
                fullWidth
              />
              <CustomInput
                label="Instructor"
                value={item.instructor}
                onChange={(e) =>
                  handleChangeCurriculum(index, "instructor", e.target.value)
                }
                fullWidth
              />
              <IconButton
                edge="end"
                color="error"
                onClick={() => handleRemoveCurriculumItem(index)}
                aria-label="remove"
              >
                <CloseIcon />
              </IconButton>
            </Box>
          ))}
          <CustomButton
            backgroundColor={theme.palette.secondary.main}
            title="Add Curriculum Item"
            onClick={handleAddCurriculumItem}
            color="white"
          />
        </DialogContent>
        <DialogActions>
          <CustomButton
            backgroundColor={theme.palette.secondary.main}
            title="Save"
            onClick={handleAddOrUpdateCourse}
            color="white"
          />
          <CustomButton
            backgroundColor={theme.palette.error.main}
            title="Cancel"
            onClick={handleCloseDialog}
            color="white"
          />
        </DialogActions>
      </Dialog>

      {/* Confirm Delete Dialog */}
      <Dialog open={openConfirmDialog} onClose={handleCloseConfirmDialog}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete the course "{courseTitleToDelete}"?
          </Typography>
        </DialogContent>
        <DialogActions>
          <CustomButton
            backgroundColor={theme.palette.error.main}
            title="Delete"
            onClick={handleDeleteCourse}
            color="white"
          />
          <CustomButton
            backgroundColor={theme.palette.secondary.main}
            title="Cancel"
            onClick={handleCloseConfirmDialog}
            color="white"
          />
        </DialogActions>
      </Dialog>

      {/* Course Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Subtitle</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Level</TableCell>
              <TableCell>Instructor</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses?.data?.map((course) => (
              <TableRow key={course._id}>
                <TableCell>{course.title}</TableCell>
                <TableCell>{course.subtitle}</TableCell>
                <TableCell>{course.duration}</TableCell>
                <TableCell>{course.level}</TableCell>
                <TableCell>{course.instructor}</TableCell>
                <TableCell>
                  <CustomButton
                    backgroundColor={theme.palette.primary.main}
                    title="Edit"
                    onClick={() => handleOpenDialog(course)}
                    color="white"
                  />
                  <CustomButton
                    backgroundColor={theme.palette.error.main}
                    title="Delete"
                    onClick={() => handleOpenConfirmDialog(course)}
                    color="white"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AdminCourses;
