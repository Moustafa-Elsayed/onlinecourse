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
import CustomButton from "@/components/shared/CustomButton";
import theme from "@/styles/theme";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const CoursesTable = ({
  courses,
  handleOpenDialog,
  handleOpenConfirmDialog,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:"bold"}}>Title</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>Subtitle</TableCell>
            <TableCell sx={{fontWeight:"bold"}}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses?.map((course) => (
            <TableRow key={course._id}>
              <TableCell >{course.title}</TableCell>
              <TableCell sx={{width:"70%"}}>{course.subtitle}</TableCell>
              <TableCell sx={{ display: "inline-flex", gap: 0.5 }}>
                {/* <CustomButton
                  title="Edit"
                  backgroundColor={theme.palette.secondary.main}
                  onClick={() => handleOpenDialog(course)}
                  color="white"
                /> */}
                <Tooltip title="Edit ">
                  <IconButton
                    sx={{
                      backgroundColor: "secondary.main",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "secondary.main",
                      },
                    }}
                    onClick={() => handleOpenDialog(course)}
                  >
                    <EditIcon />
                  </IconButton>
                </Tooltip>
                {/* <CustomButton
                  title="Delete"
                  backgroundColor={theme.palette.primary.light}
                  onClick={() => handleOpenConfirmDialog(course)}
                /> */}
                <Tooltip title="Delete">
                  <IconButton
                    sx={{
                      backgroundColor: "red",
                      color: "white",
                      "&:hover": { backgroundColor: "darkred" },
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
