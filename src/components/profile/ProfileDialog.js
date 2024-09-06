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
import { showToast } from "../shared/showToast";
import DividerWithText from "../shared/DividerWithText";
import theme from "@/styles/theme";

const ProfileDialog = ({ open, onClose, userData, onRefetch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...userData });
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSave = () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("username", editData.username);
    formData.append("email", editData.email);
    formData.append("bio", editData.bio || "");
    formData.append("location", editData.location || "");
    formData.append("website", editData.website || "");
    formData.append("phoneNumber", editData.phoneNumber || "");
    if (selectedFile) {
      formData.append("avatar", selectedFile);
    }

    dispatch(UpdateUserProfile({ id: userData.id, updatedData: formData }))
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

  // Add a timestamp to the avatar URL to prevent caching issues
  const avatarSrc = editData?.avatar
    ? `${editData.avatar}?${new Date().getTime()}`
    : undefined;

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
            src={avatarSrc}
            alt={editData?.username}
          >
            {!editData?.avatar && editData?.username?.charAt(0).toUpperCase()}
          </Avatar>
        </Box>

        <DividerWithText />
        {isEditing ? (
          <>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ marginBottom: "16px" }}
            />
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
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
            <PersonIcon sx={{ mr: 1 }} />
              {editData.username}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <EmailIcon sx={{ mr: 1 }} />
              {editData.email}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <PersonIcon sx={{ mr: 1 }} />
              {editData.bio || "N/A"}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <LocationOnIcon sx={{ mr: 1 }} />
              {editData.location || "N/A"}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <WebIcon sx={{ mr: 1 }} />
              {editData.website || "N/A"}
            </Typography>
            <Typography variant="body2">
              <PhoneIcon sx={{ mr: 1 }} />
              {editData.phoneNumber || "N/A"}
            </Typography>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        {isEditing ? (
          <>
            <Button
              onClick={() => setIsEditing(false)}
              sx={{
                backgroundColor: theme.palette.primary.light,
                border:"1px solid #c4c4c4",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              startIcon={<CancelIcon />}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              endIcon={
                isLoading ? <CircularProgress size={24} /> : <SaveIcon />
              }
              sx={{
                backgroundColor: theme.palette.secondary.main,
                color:"white",
                "&:hover": {
                  backgroundColor: theme.palette.secondary.main,
                },
              }}
              disabled={isLoading}
            >
              Save
            </Button>
          </>
        ) : (
          <Button
            onClick={() => setIsEditing(true)}
            sx={{
              backgroundColor: theme.palette.primary.light,
              border:"1px solid #c4c4c4",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ProfileDialog;
