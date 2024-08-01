import { useState } from "react";
import {
  Button,
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

const AdminCourses = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: "",
    subtitle: "",
    curriculum: [
      { number: "", title: "", duration: "", level: "", instructor: "" },
    ],
  });
  const [editCourse, setEditCourse] = useState(null);
  const [courseToDelete, setCourseToDelete] = useState(null);
  const [courseTitleToDelete, setCourseTitleToDelete] = useState("");

  // Dummy data
  const [courses, setCourses] = useState([
    {
      _id: "1",
      title: "Advanced Front-End Development",
      subtitle: "Deep dive into advanced front-end techniques and frameworks.",
      curriculum: [
        {
          number: "01",
          title: "Advanced JavaScript Concepts",
          duration: "6 weeks",
          level: "Intermediate",
          instructor: "Emily Johnson",
        },
        {
          number: "02",
          title: "React and State Management",
          duration: "4 weeks",
          level: "Intermediate",
          instructor: "John Doe",
        },
        {
          number: "03",
          title: "Modern CSS Techniques",
          duration: "3 weeks",
          level: "Beginner",
          instructor: "Sarah Smith",
        },
        {
          number: "04",
          title: "Performance Optimization",
          duration: "2 weeks",
          level: "Advanced",
          instructor: "Michael Brown",
        },
        {
          number: "05",
          title: "Front-End Build Tools",
          duration: "5 weeks",
          level: "Intermediate",
          instructor: "Jessica Lee",
        },
      ],
    },
    {
      _id: "2",
      title: "Introduction to Web Development",
      subtitle: "Basic concepts and tools for web development.",
      curriculum: [
        {
          number: "01",
          title: "HTML & CSS Basics",
          duration: "4 weeks",
          level: "Beginner",
          instructor: "Alice Green",
        },
        {
          number: "02",
          title: "JavaScript Fundamentals",
          duration: "5 weeks",
          level: "Beginner",
          instructor: "Bob White",
        },
        {
          number: "03",
          title: "Version Control with Git",
          duration: "2 weeks",
          level: "Beginner",
          instructor: "Charlie Black",
        },
        {
          number: "04",
          title: "Responsive Design",
          duration: "3 weeks",
          level: "Intermediate",
          instructor: "Diana Blue",
        },
        {
          number: "05",
          title: "Introduction to Web Hosting",
          duration: "2 weeks",
          level: "Beginner",
          instructor: "Eve Gray",
        },
      ],
    },
  ]);

  const handleOpenDialog = (course = null) => {
    if (course) {
      // Set dialog for editing existing course
      setEditCourse(course);
      setNewCourse({
        title: course.title,
        subtitle: course.subtitle,
        curriculum: course.curriculum || [],
      });
    } else {
      // Set dialog for adding a new course
      setEditCourse(null);
      setNewCourse({
        title: "",
        subtitle: "",
        curriculum: [
          { number: "", title: "", duration: "", level: "", instructor: "" },
        ],
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
    setCourseTitleToDelete("");
    setOpenConfirmDialog(false);
  };

  const handleAddOrUpdateCourse = () => {
    if (editCourse) {
      // Update course
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
      // Add new course
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
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          {editCourse ? "Edit Course" : "Add New Course"}
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleCloseDialog}
            aria-label="close"
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Course Title"
            value={newCourse.title}
            onChange={(e) =>
              setNewCourse({ ...newCourse, title: e.target.value })
            }
            fullWidth
            margin="normal"
          />
          <TextField
            label="Course Subtitle"
            value={newCourse.subtitle}
            onChange={(e) =>
              setNewCourse({ ...newCourse, subtitle: e.target.value })
            }
            fullWidth
            margin="normal"
          />
          {newCourse.curriculum.map((item, index) => (
            <div key={index}>
              <h3>Curriculum Item {index + 1}</h3>
              <TextField
                label="Number"
                value={item.number}
                onChange={(e) =>
                  handleChangeCurriculum(index, "number", e.target.value)
                }
                fullWidth
                margin="normal"
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
            </div>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddOrUpdateCourse} color="primary">
            {editCourse ? "Update Course" : "Add Course"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={openConfirmDialog} onClose={handleCloseConfirmDialog}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <p>
            Are you sure you want to delete the course "{courseTitleToDelete}"?
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteCourse} color="primary">
            Delete
          </Button>
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
            {courses.map((course) => (
              <TableRow key={course._id}>
                <TableCell>{course.title}</TableCell>
                <TableCell>{course.subtitle}</TableCell>
                <TableCell sx={{ display: "inline-flex", gap: 0.5 }}>
                  <CustomButton
                    title="Edit"
                    backgroundColor={theme.palette.secondary.main}
                    onClick={() => handleOpenDialog(course)}
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
