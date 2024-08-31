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
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

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
        if (onRefetch) {
          onRefetch(); 
        }
      })
      .catch((error) => {
        console.error("Failed to update user profile:", error);
        // Optionally, handle error (e.g., show a notification)
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
      <DialogTitle sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
        {isEditing ? (
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography>Edit Profile</Typography>
            <IconButton onClick={onClose} color="inherit">
              <CancelIcon />
            </IconButton>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography>Profile</Typography>
            <IconButton onClick={() => setIsEditing(true)} color="inherit">
              <EditOutlinedIcon />
            </IconButton>
          </Box>
        )}
      </DialogTitle>
      <DialogContent sx={{ p: 3 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 3,
            overflow: "hidden"
          }}
        >
          <Avatar
            sx={{
              width: 120,
              height: 120,
              border: "2px solid orange",
              boxShadow: 3,
            }}
            src={
              editData?.avatar
                ? `http://localhost:4000/${editData.avatar}`
                : undefined
            }
            alt={editData?.username}
          >
            {!editData?.avatar && editData?.username?.charAt(0).toUpperCase()}
          </Avatar>
        </Box>
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
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: (
                  <PersonIcon sx={{ mr: 1 }} />
                ),
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
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: (
                  <EmailIcon sx={{ mr: 1 }} />
                ),
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
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: (
                  <EditIcon sx={{ mr: 1 }} />
                ),
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
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: (
                  <LocationOnIcon sx={{ mr: 1 }} />
                ),
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
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: (
                  <WebIcon sx={{ mr: 1 }} />
                ),
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
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: (
                  <PhoneIcon sx={{ mr: 1 }} />
                ),
              }}
            />
          </>
        ) : (
          <>
            <Typography variant="h6" gutterBottom>
              {editData?.username}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Email: {editData?.email}
            </Typography>
            {editData?.bio && (
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Bio: {editData.bio}
              </Typography>
            )}
            {editData?.location && (
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Location: {editData.location}
              </Typography>
            )}
            {editData?.website && (
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Website: <a href={editData.website} target="_blank" rel="noopener noreferrer">{editData.website}</a>
              </Typography>
            )}
            {editData?.phoneNumber && (
              <Typography variant="body2" color="text.secondary" gutterBottom>
                 Phone: {editData.phoneNumber}
              </Typography>
            )}
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" variant="outlined" startIcon={<CancelIcon />}>
          {isEditing ? "Cancel" : "Close"}
        </Button>
        {isEditing ? (
          <Button
            onClick={handleSave}
            color="primary"
            variant="contained"
            disabled={isLoading}
            startIcon={isLoading ? <CircularProgress size={24} color="inherit" /> : <SaveIcon />}
          >
            {isLoading ? "Saving..." : "Save"}
          </Button>
        ) : (
          <Button onClick={() => setIsEditing(true)} color="primary" variant="contained" startIcon={<EditOutlinedIcon />}>
            Edit
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ProfileDialog;
