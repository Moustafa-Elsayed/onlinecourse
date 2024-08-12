// components/ProfileDialog.js
import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

const ProfileDialog = ({ open, onClose, userData }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      sx={{ textAlign: "center" }}
    >
      <DialogTitle>Profile</DialogTitle>
      <DialogContent>
        <Avatar
          sx={{ width: 80, height: 80, mb: 2 }}
          src={
            userData?.avatar
              ? `http://localhost:3000/${userData.avatar}`
              : undefined
          }
          alt={userData?.username}
        >
          {!userData?.avatar && userData?.username?.charAt(0).toUpperCase()}
        </Avatar>
        <Typography variant="h6" gutterBottom>
          {userData?.username}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Email: {userData?.email}
        </Typography>
        {/* Add more user details as needed */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProfileDialog;
