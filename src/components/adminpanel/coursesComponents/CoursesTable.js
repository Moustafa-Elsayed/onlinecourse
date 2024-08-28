import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tooltip,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import theme from "@/styles/theme";

const CoursesTable = ({
  courses,
  handleOpenDialog,
  handleOpenConfirmDialog,
}) => {
  return (
    <TableContainer component={Paper}  sx={{ overflowX: "auto", boxShadow: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold",textAlign:"center"}}>Title</TableCell>
            <TableCell sx={{ fontWeight: "bold",textAlign:"center"}}>Subtitle</TableCell>
            <TableCell sx={{ fontWeight: "bold"}}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses?.map((course) => (
            <TableRow key={course._id}  sx={{
              "&:nth-of-type(odd)": {
                backgroundColor: theme.palette.action.hover,
              }            }} >
              <TableCell sx={{textAlign:"center"}}>
                {course.title}
              </TableCell>
              <TableCell sx={{ width: "70%",textAlign:"center" }}>
                {course.subtitle}
              </TableCell>
              <TableCell sx={{ display: "inline-flex", gap: 0.5}}>
                <Tooltip title="Edit">
                  <IconButton
                    sx={{
                      backgroundColor: theme.palette.secondary.main,
                      color: "white",
                      "&:hover": {
                        backgroundColor: theme.palette.secondary.dark,
                      },
                    }}
                    onClick={() => handleOpenDialog(course)}
                  >
                    <EditIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton
                    sx={{
                      backgroundColor: theme.palette.error.main,
                      color: "white",
                      "&:hover": { backgroundColor: theme.palette.error.dark },
                    }}
                    onClick={() => handleOpenConfirmDialog(course)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CoursesTable;
