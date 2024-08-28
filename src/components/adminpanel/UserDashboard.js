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
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/redux/users/GetAllUsersRequest";
import { deleteUsers } from "@/redux/users/DeleteCoursesRequest";
import CustomButton from "../shared/CustomButton";
import theme from "@/styles/theme";
import { showToast } from "../shared/showToast";
const UserDashboard = () => {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.users);

  // State for handling the dialog visibility and selected user
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

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

  return (
    <>
      <Typography variant="h4">Admin Panel: Manage Users</Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell sx={{ display: "inline-flex", gap: 0.5 }}>
                  <CustomButton
                    title="Delete"
                    backgroundColor={"red"}
                    color={"white"}
                    onClick={() => handleOpenConfirmDialog(user)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

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
