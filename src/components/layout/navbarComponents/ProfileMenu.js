import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import Box from "@mui/material/Box";
import theme from "@/styles/theme";
import { clearUserData } from "@/redux/slices/userSlice";
import { showToast } from "@/components/shared/showToast";
import CustomButton from "@/components/shared/CustomButton";
import ProfileDialog from "@/components/profile/ProfileDialog";
import { Router } from "next/router";
import useButtonClickHandler from "@/hooks/useButtonClickHandler";
import { MainUrl } from "@/lib/api/constants";
import PersonIcon from "@mui/icons-material/Person";

const ProfileMenu = ({ isLogin, activeButton, handleLoginRoute }) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [profileDialogOpen, setProfileDialogOpen] = React.useState(false);
  const handleDashboard = useButtonClickHandler("/adminpanel");

  const open = Boolean(anchorEl);

  const userData = useSelector((state) => state?.user?.data);
  const role = Cookies.get("role");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("role");
    handleLoginRoute();
    dispatch(clearUserData());
    showToast("Logout successful!", "success");
    setAnchorEl(null);
  };

  const handleOpenProfileDialog = () => {
    setProfileDialogOpen(true);
    handleClose();
  };

  const handleCloseProfileDialog = () => {
    setProfileDialogOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      {Cookies.get("token") ? (
        <React.Fragment>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {role === "ADMIN" && (
              <Box
                sx={{
                  border: `1px solid ${theme.palette.secondary.main}`,
                  p: 1,
                  borderRadius: 3,
                }}
              >
                <CustomButton
                  backgroundColor={theme.palette.secondary.main}
                  color="white"
                  title=" Dashboard"
                  onClick={handleDashboard}
                />
              </Box>
            )}
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2, border: "1px solid orange" }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar
                src={userData?.avatar ? userData?.avatar : undefined}
                alt={userData?.username}
              >
                {!userData?.avatar &&
                  userData?.username?.charAt(0).toUpperCase()}
              </Avatar>
            </IconButton>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleOpenProfileDialog}>
              <ListItemIcon>
                <PersonIcon fontSize="small" />
              </ListItemIcon>
              Profile
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
          <ProfileDialog
            open={profileDialogOpen}
            onClose={handleCloseProfileDialog}
            userData={userData}
          />
        </React.Fragment>
      ) : (
        <CustomButton
          title="Login"
          backgroundColor={
            activeButton === "login"
              ? theme.palette.secondary.main
              : "transparent"
          }
          color={activeButton === "login" ? "white" : "black"}
          onClick={handleLoginRoute}
        />
      )}
    </Box>
  );
};

export default ProfileMenu;
