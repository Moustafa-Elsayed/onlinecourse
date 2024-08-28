import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Box,
  Tooltip,
  IconButton,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTheme } from "@mui/material/styles";

function UserTable({
  users,
  editedUser,
  newRole,
  setNewRole,
  handleUpdateRole,
  handleEditRole,
  handleOpenConfirmDialog,
}) {
  const theme = useTheme();

  return (
    <TableContainer component={Paper} sx={{ overflowX: "auto", boxShadow: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <Typography variant="h4" sx={{ textAlign: "center" }}>Username</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h4" sx={{ textAlign: "center" }}>Email</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h4" sx={{ textAlign: "center" }}>Role</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h4" sx={{ textAlign: "center" }}>Actions</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((user) => (
            <TableRow
              key={user._id}
              sx={{
                "&:nth-of-type(odd)": {
                  backgroundColor: theme.palette.action.hover,
                },
                transition: "transform 0.2s",
              }}
            >
              <TableCell align="center" >{user.username}</TableCell>
              <TableCell align="center">{user.email}</TableCell>
              <TableCell align="center">
                {editedUser && editedUser._id === user._id ? (
                  <TextField
                    select
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                    SelectProps={{ native: true }}
                    sx={{ width: "100px", marginBottom: "8px" }}
                  >
                    <option value="USER">USER</option>
                    <option value="ADMIN">ADMIN</option>
                  </TextField>
                ) : (
                  <Typography variant="body2" sx={{ fontWeight: "bold", textAlign: "center" }}>
                    {user.role}
                  </Typography>
                )}
              </TableCell>
              <TableCell align="center">
                <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
                  {editedUser && editedUser._id === user._id ? (
                    <Tooltip title="Save">
                      <IconButton
                        sx={{
                          backgroundColor: "green",
                          color: "white",
                          "&:hover": { backgroundColor: "darkgreen" },
                        }}
                        onClick={handleUpdateRole}
                      >
                        <SaveIcon />
                      </IconButton>
                    </Tooltip>
                  ) : (
                    <Tooltip title="Edit Role">
                      <IconButton
                        sx={{
                          backgroundColor: theme.palette.primary.main,
                          color: "white",
                          "&:hover": {
                            backgroundColor: theme.palette.primary.dark,
                          },
                        }}
                        onClick={() => handleEditRole(user)}
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                  <Tooltip title="Delete">
                    <IconButton
                      sx={{
                        backgroundColor: "red",
                        color: "white",
                        "&:hover": { backgroundColor: "darkred" },
                      }}
                      onClick={() => handleOpenConfirmDialog(user)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserTable;
