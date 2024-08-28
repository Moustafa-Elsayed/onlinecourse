import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import CustomButton from "@/components/shared/CustomButton";
import theme from "@/styles/theme";

const CoursesTable = ({ courses, handleOpenDialog, handleOpenConfirmDialog }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Subtitle</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses?.map((course) => (
            <TableRow key={course._id}>
              <TableCell>{course.title}</TableCell>
              <TableCell>{course.subtitle}</TableCell>
              <TableCell sx={{ display: "inline-flex", gap: 0.5 }}>
                <CustomButton
                  title="Edit"
                  backgroundColor={theme.palette.secondary.main}
                  onClick={() => handleOpenDialog(course)}
                  color="white"
                />
                <CustomButton
                  title="Delete"
                  backgroundColor={theme.palette.primary.light}
                  onClick={() => handleOpenConfirmDialog(course)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CoursesTable;
