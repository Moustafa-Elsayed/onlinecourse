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
  Button,
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
    photos: [],
    photoPreview: [],
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
    formData.append("curriculum", JSON.stringify(newCourse.curriculum));
    newCourse.photos.forEach((photo) => {
      formData.append("photos", photo);
    });
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
          title: "",
          details: [{ title: "", duration: "" }],
        },
      ],
    }));
  };

  const handleAddDetail = (itemIndex) => {
    const updatedCurriculum = newCourse.curriculum.map((item, index) =>
      index === itemIndex
        ? { ...item, details: [...item.details, { title: "", duration: "" }] }
        : item
    );
    setNewCourse((prevCourse) => ({
      ...prevCourse,
      curriculum: updatedCurriculum,
    }));
  };

  const handleChangeDetail = (itemIndex, detailIndex, field, value) => {
    const updatedCurriculum = newCourse.curriculum.map((item, i) =>
      i === itemIndex
        ? {
            ...item,
            details: item.details.map((detail, j) =>
              j === detailIndex ? { ...detail, [field]: value } : detail
            ),
          }
        : item
    );
    setNewCourse((prevCourse) => ({
      ...prevCourse,
      curriculum: updatedCurriculum,
    }));
  };

  const handleRemoveCurriculumItem = (index) => {
    setNewCourse((prevCourse) => {
      const updatedCurriculum = prevCourse.curriculum.filter(
        (_, i) => i !== index
      );

      return {
        ...prevCourse,
        curriculum: updatedCurriculum,
      };
    });
  };

  const handleRemoveDetail = (itemIndex, detailIndex) => {
    setNewCourse((prevCourse) => {
      const updatedCurriculum = prevCourse.curriculum.map((item, i) =>
        i === itemIndex
          ? {
              ...item,
              details: item.details.filter((_, j) => j !== detailIndex),
            }
          : item
      );

      return {
        ...prevCourse,
        curriculum: updatedCurriculum,
      };
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const newPreviews = files.map((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setNewCourse((prevCourse) => ({
            ...prevCourse,
            photoPreview: [...prevCourse.photoPreview, reader.result],
          }));
        };
        reader.readAsDataURL(file);
        return reader;
      });

      setNewCourse((prevCourse) => ({
        ...prevCourse,
        photos: [...prevCourse.photos, ...files],
      }));
    }
  };

  const handleRemovePhoto = (index) => {
    setNewCourse((prevCourse) => {
      const updatedPreviews = prevCourse.photoPreview.filter(
        (_, i) => i !== index
      );
      const updatedPhotos = prevCourse.photos.filter((_, i) => i !== index);

      return {
        ...prevCourse,
        photoPreview: updatedPreviews,
        photos: updatedPhotos,
      };
    });
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
          <Button variant="contained" component="label" color="secondary">
            Upload Photos
            <input type="file" hidden multiple onChange={handleImageChange} />
          </Button>
          {newCourse.photoPreview.map((preview, index) => (
            <Box key={index} sx={{ mb: 2, position: "relative" }}>
              <img
                src={preview}
                alt={`Course preview ${index + 1}`}
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <IconButton
                sx={{ position: "absolute", top: 0, right: 0 }}
                onClick={() => handleRemovePhoto(index)}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          ))}

          <Box sx={{ mb: 3 }}></Box>

          {newCourse.curriculum.map((item, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <Typography variant="h6">Curriculum Item {index + 1}</Typography>

              <CustomInput
                label="Title"
                value={item.title}
                onChange={(e) =>
                  handleChangeCurriculum(index, "title", e.target.value)
                }
                fullWidth
              />
              {item.details.map((detail, detailIndex) => (
                <div key={detailIndex} style={{ marginBottom: "10px" }}>
                  <CustomInput
                    label="Detail Title"
                    value={detail.title}
                    onChange={(e) =>
                      handleChangeDetail(
                        index,
                        detailIndex,
                        "title",
                        e.target.value
                      )
                    }
                    fullWidth
                  />
                  <CustomInput
                    label="Detail Duration"
                    value={detail.duration}
                    onChange={(e) =>
                      handleChangeDetail(
                        index,
                        detailIndex,
                        "duration",
                        e.target.value
                      )
                    }
                    fullWidth
                  />
                  <CustomButton
                    backgroundColor={theme.palette.primary.light}
                    onClick={() => handleRemoveDetail(index, detailIndex)}
                    border="1px solid #d1cbcb82"
                    sx={{ mt: 2 }}
                    title="Remove Detail"
                  />
                </div>
              ))}
              <CustomButton
                backgroundColor={theme.palette.primary.light}
                onClick={() => handleAddDetail(index)}
                border="1px solid #d1cbcb82"
                sx={{ mt: 2 }}
                title="Add Detail"
              />
              <CustomButton
                backgroundColor={theme.palette.primary.light}
                onClick={() => handleRemoveCurriculumItem(index)}
                border="1px solid #d1cbcb82"
                sx={{ mt: 2 }}
                title="Remove Curriculum Item"
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
