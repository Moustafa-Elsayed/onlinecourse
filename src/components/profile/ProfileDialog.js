import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";
import { UpdateUserProfile } from "@/redux/users/UpdateUserProfile";
import { Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WebIcon from "@mui/icons-material/Web";
import PhoneIcon from "@mui/icons-material/Phone";
import { MainUrl } from "@/lib/api/constants";
import DividerWithText from "../shared/DividerWithText";
import { showToast } from "../shared/showToast";

const ProfileDialog = ({ open, onClose, userData, onRefetch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...userData });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsLoading(true);
    dispatch(UpdateUserProfile({ id: userData.id, updatedData: editData }))
      .unwrap()
      .then(() => {
        setIsEditing(false);
        onClose();
        showToast("Success! Your profile has been updated.", "success");
        if (onRefetch) {
          onRefetch();
        }
      })
      .catch((error) => {
        showToast("Failed to update your profile. Please try again.", "error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{ textAlign: "center", borderRadius: 2 }}
    >
      <DialogTitle sx={{ fontWeight: "bold", fontSize: "1.25rem" }}>
        {isEditing ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>Edit Profile</Typography>
            <IconButton onClick={onClose} color="inherit">
              <CancelIcon />
            </IconButton>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>Profile</Typography>
            <IconButton onClick={onClose} color="inherit">
              <CancelIcon />
            </IconButton>
          </Box>
        )}
      </DialogTitle>
      <DialogContent
        sx={{
          p: 3,
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
          boxShadow: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 3,
            overflow: "hidden",
          }}
        >
          <Avatar
            sx={{
              width: 120,
              height: 120,
              border: "2px solid transparent",
              boxShadow: 3,
              background:
                "linear-gradient(white, white), linear-gradient(to right, #ff7e5f, #feb47b)",
              backgroundOrigin: "border-box",
              backgroundClip: "content-box, border-box",
            }}
            src={editData?.avatar ? editData?.avatar : undefined}
            alt={editData?.username}
          >
            {!editData?.avatar && editData?.username?.charAt(0).toUpperCase()}
          </Avatar>
        </Box>

        <DividerWithText />
        {isEditing ? (
          <>
            <TextField
              margin="dense"
              label="Username"
              name="username"
              value={editData.username}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              sx={{
                mb: 2,
                borderRadius: "5px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "5px",
                  boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
                },
                "& .MuiInputAdornment-root": {
                  color: "orange",
                },
              }}
              InputProps={{
                startAdornment: <EmailIcon sx={{ mr: 1 }} />,
              }}
            />

            <TextField
              margin="dense"
              label="Email"
              name="email"
              value={editData.email}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              sx={{
                mb: 2,
                borderRadius: "5px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "5px",
                  boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
                },
                "& .MuiInputAdornment-root": {
                  color: "orange",
                },
              }}
              InputProps={{
                startAdornment: <EmailIcon sx={{ mr: 1 }} />,
              }}
            />
            <TextField
              margin="dense"
              label="Bio"
              name="bio"
              value={editData.bio || ""}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              sx={{
                mb: 2,
                borderRadius: "5px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "5px",
                  boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
                },
                "& .MuiInputAdornment-root": {
                  color: "orange",
                },
              }}
              InputProps={{
                startAdornment: <EditIcon sx={{ mr: 1 }} />,
              }}
            />
            <TextField
              margin="dense"
              label="Location"
              name="location"
              value={editData.location || ""}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              sx={{
                mb: 2,
                borderRadius: "5px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "5px",
                  boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
                },
                "& .MuiInputAdornment-root": {
                  color: "orange",
                },
              }}
              InputProps={{
                startAdornment: <LocationOnIcon sx={{ mr: 1 }} />,
              }}
            />
            <TextField
              margin="dense"
              label="Website"
              name="website"
              value={editData.website || ""}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              sx={{
                mb: 2,
                borderRadius: "5px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "5px",
                  boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
                },
                "& .MuiInputAdornment-root": {
                  color: "orange",
                },
              }}
              InputProps={{
                startAdornment: <WebIcon sx={{ mr: 1 }} />,
              }}
            />
            <TextField
              margin="dense"
              label="Phone Number"
              name="phoneNumber"
              value={editData.phoneNumber || ""}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              sx={{
                mb: 2,
                borderRadius: "5px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "5px",
                  boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
                },
                "& .MuiInputAdornment-root": {
                  color: "orange",
                },
              }}
              InputProps={{
                startAdornment: <PhoneIcon sx={{ mr: 1 }} />,
              }}
            />
          </>
        ) : (
          <>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#333" }}
              gutterBottom
            >
              {editData?.username}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "gray", mb: 1.5 }}
              gutterBottom
            >
              Email: {editData?.email}
            </Typography>
            {editData?.bio && (
              <Typography
                variant="body2"
                sx={{ color: "gray", mb: 1.5 }}
                gutterBottom
              >
                Bio: {editData?.bio}
              </Typography>
            )}
            {editData?.location && (
              <Typography
                variant="body2"
                sx={{ color: "gray", mb: 1.5 }}
                gutterBottom
              >
                Location: {editData?.location}
              </Typography>
            )}
            {editData?.website && (
              <Typography
                variant="body2"
                sx={{ color: "gray", mb: 1.5 }}
                gutterBottom
              >
                Website: {editData?.website}
              </Typography>
            )}
            {editData?.phoneNumber && (
              <Typography
                variant="body2"
                sx={{ color: "gray", mb: 1.5 }}
                gutterBottom
              >
                Phone Number: {editData?.phoneNumber}
              </Typography>
            )}
          </>
        )}
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center", mb: 2 }}>
        {isEditing ? (
          <>
            <Button
              onClick={handleSave}
              variant="contained"
              color="primary"
              startIcon={<SaveIcon />}
              disabled={isLoading}
              sx={{
                borderRadius: "8px",
                padding: "6px 16px",
                background: "linear-gradient(to right, #ff7e5f, #feb47b)",
                "&:hover": {
                  background: "linear-gradient(to right, #feb47b, #ff7e5f)",
                },
              }}
            >
              {isLoading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Save"
              )}
            </Button>
            <Button
              onClick={() => setIsEditing(false)}
              variant="outlined"
              color="secondary"
              startIcon={<CancelIcon />}
              sx={{
                borderRadius: "8px",
                padding: "6px 16px",
              }}
            >
              Cancel
            </Button>
          </>
        ) : (
          <Button
            onClick={() => setIsEditing(true)}
            variant="contained"
            color="primary"
            startIcon={<EditIcon />}
            sx={{
              borderRadius: "8px",
              padding: "6px 16px",
              background: "linear-gradient(to right, #ff7e5f, #feb47b)",
              "&:hover": {
                background: "linear-gradient(to right, #feb47b, #ff7e5f)",
              },
            }}
          >
            Edit
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ProfileDialog;
