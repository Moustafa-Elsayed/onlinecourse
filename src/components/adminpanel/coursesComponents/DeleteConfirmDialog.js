import { Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import CustomButton from "@/components/shared/CustomButton";
import theme from "@/styles/theme";

const DeleteConfirmDialog = ({ open, handleClose, courseTitleToDelete, handleDeleteCourse }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
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
          onClick={handleClose}
        />
        <CustomButton
          title="Delete"
          backgroundColor={"red"}
          onClick={handleDeleteCourse}
          color="white"
        />
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmDialog;
