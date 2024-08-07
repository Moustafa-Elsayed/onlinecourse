import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import theme from "@/styles/theme";

const Curriculum = ({ curriculum }) => {
  return (
    <Box
      sx={{
        p: { xs: 0, sm: 0, md: theme.spacing(4) },
        mt: 2,
        border: "1px solid #e9e3e3",
        borderRadius: 2,
      }}
    >
      <Typography variant="h3" gutterBottom sx={{ mb: 3 }} fontWeight={"bold"}>
        Curriculum
      </Typography>
      <Grid container spacing={2}>
        {curriculum.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
            <Paper
              elevation={0}
              style={{
                padding: "20px",
                textAlign: { xs: "left", sm: "left", md: "center" },
                borderRadius: "8px",
                border: "1px solid #e9e3e3",
                height:"120px"
               
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                0{course.number}
              </Typography>
              <Typography variant="body1">{course.title}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Curriculum;
