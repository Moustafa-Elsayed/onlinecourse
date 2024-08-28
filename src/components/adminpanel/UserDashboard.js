import React, { useEffect, useState } from "react";
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
  DialogContentText,
  DialogTitle,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/redux/users/GetAllUsersRequest";
import { deleteUsers } from "@/redux/users/DeleteCoursesRequest";
import CustomButton from "../shared/CustomButton";
import theme from "@/styles/theme";
import { showToast } from "../shared/showToast";
import { BaseUrl } from "@/lib/api/constants";
import Cookies from "js-cookie";
import { Grid } from "react-loader-spinner";
import UserTable from "./UserTable";

const UserDashboard = () => {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.users);

  // State for handling the dialog visibility and selected user
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [editedUser, setEditedUser] = useState(null);
  const [newRole, setNewRole] = useState("");

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // Function to open the confirmation dialog
  const handleOpenConfirmDialog = (user) => {
    setUserToDelete(user);
    setOpenConfirmDialog(true);
  };

  // Function to close the confirmation dialog
  const handleCloseConfirmDialog = () => {
    setOpenConfirmDialog(false);
    setUserToDelete(null);
  };

  // Function to handle the delete operation
  const handleDeleteUser = async () => {
    if (userToDelete) {
      try {
        await dispatch(deleteUsers(userToDelete._id)).unwrap();
        showToast("Delete user successful!");
      } catch (error) {
        console.error("Error in handleDeleteUser:", error);
        showToast("Failed to delete user.");
      } finally {
        handleCloseConfirmDialog();
        dispatch(fetchUsers());
      }
    } else {
      handleCloseConfirmDialog();
    }
  };

  // Function to handle role editing
  const handleEditRole = (user) => {
    setEditedUser(user);
    setNewRole(user.role);
  };

  // Function to handle the role update

  const handleUpdateRole = async () => {
    if (editedUser) {
      try {
        const token = Cookies.get("token"); // Retrieve the token from cookies
        const response = await fetch(
          `${BaseUrl}/users/role/${editedUser._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Use the token from cookies
            },
            body: JSON.stringify({ role: newRole }),
          }
        );

        if (response.ok) {
          showToast("Role updated successfully!");
          dispatch(fetchUsers()); // Refresh the user list
        } else {
          showToast("Failed to update role.");
        }
      } catch (error) {
        console.error("Error in handleUpdateRole:", error);
        showToast("Server error, please try again.");
      } finally {
        setEditedUser(null);
        setNewRole("");
      }
    }
  };

  return (
    <>
      <Typography variant="h4" mb={5}>
        Admin Panel: Manage Users
      </Typography>

      <UserTable
        users={users}
        editedUser={editedUser}
        newRole={newRole}
        setNewRole={setNewRole}
        handleUpdateRole={handleUpdateRole}
        handleEditRole={handleEditRole}
        handleOpenConfirmDialog={handleOpenConfirmDialog}
      />

      {/* Confirmation Dialog */}
      <Dialog open={openConfirmDialog} onClose={handleCloseConfirmDialog}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the user {userToDelete?.username}?
            This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <CustomButton
            title="Cancel"
            color={"black"}
            onClick={handleCloseConfirmDialog}
          />
          <CustomButton
            title="Delete"
            backgroundColor={"red"}
            color={"white"}
            onClick={handleDeleteUser}
          />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UserDashboard;
