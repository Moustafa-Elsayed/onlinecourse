import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Box, Typography, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CustomButton from "@/components/shared/CustomButton";
import CustomInput from "@/components/shared/CustomInput";
import theme from "@/styles/theme";

const CourseDialog = ({ open, handleClose, newCourse, setNewCourse, editCourse, handleAddOrUpdateCourse }) => {
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
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>
        {editCourse ? "Edit Course" : "Add New Course"}
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleClose}
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
          onClick={handleClose}
        />
        <CustomButton
          title={editCourse ? "Update Course" : "Add Course"}
          backgroundColor={theme.palette.secondary.main}
          onClick={handleAddOrUpdateCourse}
          color="white"
          loading={true}
        />
      </DialogActions>
    </Dialog>
  );
};

export default CourseDialog;
