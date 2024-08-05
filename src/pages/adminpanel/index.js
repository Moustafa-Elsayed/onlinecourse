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
import { fetchCourses } from "@/redux/actions/courses/coursesActions";

const AdminCourses = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: "",
    subtitle: "",
    curriculum: [],
  });
  const [editCourse, setEditCourse] = useState(null);
  const [courseToDelete, setCourseToDelete] = useState(null);
  const [courseTitleToDelete, setCourseTitleToDelete] = useState("");

  const dispatch = useDispatch();
  const { courses, status, error } = useSelector((state) => state.courses);
  console.log("courses", courses);
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
      });
    } else {
      setEditCourse(null);
      setNewCourse({
        title: "",
        subtitle: "",
        curriculum: [],
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
    if (editCourse) {
      setCourses(
        courses.map((course) =>
          course._id === editCourse._id
            ? {
                ...editCourse,
                ...newCourse,
                curriculum: newCourse.curriculum,
              }
            : course
        )
      );
      showToast("Update course successful!");
    } else {
      setCourses([...courses, { _id: new Date().toISOString(), ...newCourse }]);
      showToast("Add course successful!");
    }
    handleCloseDialog();
  };

  const handleDeleteCourse = () => {
    setCourses(courses.filter((course) => course._id !== courseToDelete._id));
    handleCloseConfirmDialog();
    showToast("Delete course successful!");
  };

  const handleChangeCurriculum = (index, field, value) => {
    const updatedCurriculum = [...newCourse.curriculum];
    updatedCurriculum[index][field] = value;
    setNewCourse({ ...newCourse, curriculum: updatedCurriculum });
  };

  const handleAddCurriculumItem = () => {
    setNewCourse((prevCourse) => ({
      ...prevCourse,
      curriculum: [
        ...prevCourse.curriculum,
        { number: "", title: "", duration: "", level: "", instructor: "" },
      ],
    }));
  };

  const handleRemoveCurriculumItem = (index) => {
    setNewCourse((prevCourse) => ({
      ...prevCourse,
      curriculum: prevCourse.curriculum.filter((_, i) => i !== index),
    }));
  };

  return (
    <>
      <Typography>Admin Panel: Manage Courses</Typography>
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

          {newCourse.curriculum.map((item, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <h3>Curriculum Item {index + 1}</h3>

              <CustomInput
                label="Number"
                value={item.number}
                type="number"
                onChange={(e) =>
                  handleChangeCurriculum(index, "number", e.target.value)
                }
              />

              <TextField
                label="Title"
                value={item.title}
                onChange={(e) =>
                  handleChangeCurriculum(index, "title", e.target.value)
                }
                fullWidth
                margin="normal"
              />
              <TextField
                label="Duration"
                value={item.duration}
                onChange={(e) =>
                  handleChangeCurriculum(index, "duration", e.target.value)
                }
                fullWidth
                margin="normal"
              />
              <TextField
                label="Level"
                value={item.level}
                onChange={(e) =>
                  handleChangeCurriculum(index, "level", e.target.value)
                }
                fullWidth
                margin="normal"
              />
              <TextField
                label="Instructor"
                value={item.instructor}
                onChange={(e) =>
                  handleChangeCurriculum(index, "instructor", e.target.value)
                }
                fullWidth
                margin="normal"
              />

              <CustomButton
                backgroundColor={theme.palette.primary.light}
                onClick={() => handleRemoveCurriculumItem(index)}
                border="1px solid #d1cbcb82"
                sx={{ mt: 2 }}
                title="Remove"
              />
            </div>
          ))}
          <CustomButton
            backgroundColor={theme.palette.secondary.main}
            onClick={handleAddCurriculumItem}
            sx={{ mt: 5 }}
            color="white"
            title="Add Curriculum Item"
          />
        </DialogContent>
        <DialogActions sx={{ mr: 4 }}>
          <CustomButton
            title="Cancel"
            backgroundColor={theme.palette.primary.light}
            onClick={handleCloseDialog}
          />
          <CustomButton
            title={editCourse ? "Update Course" : "Add Course"}
            backgroundColor={theme.palette.secondary.main}
            onClick={handleAddOrUpdateCourse}
            color="white"
          />
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={openConfirmDialog} onClose={handleCloseConfirmDialog}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete the course {courseTitleToDelete}?
          </Typography>
        </DialogContent>
        <DialogActions>
          <CustomButton
            title="Cancel"
            backgroundColor={theme.palette.primary.light}
            onClick={handleCloseConfirmDialog}
          />
          <CustomButton
            title="Delete"
            backgroundColor={"red"}
            onClick={handleDeleteCourse}
            color="white"
          />
        </DialogActions>
      </Dialog>

      {/* Courses Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Subtitle</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses?.data?.map((course) => (
              <TableRow key={course._id}>
                <TableCell>{course.title}</TableCell>
                <TableCell>{course.subtitle}</TableCell>
                <TableCell sx={{ display: "inline-flex", gap: 0.5 }}>
                  <CustomButton
                    title="Edit"
                    backgroundColor={theme.palette.secondary.main}
                    onClick={() => handleOpenDialog(course)}
                    color="white"
                  />
                  <CustomButton
                    title="Delete"
                    backgroundColor={theme.palette.primary.light}
                    onClick={() => handleOpenConfirmDialog(course)}
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
