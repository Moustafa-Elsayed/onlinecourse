import React from "react";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import theme from "@/styles/theme";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
const CourseCard = ({ number, title, lessons }) => {
  return (
    <Card sx={{ borderRadius: 2, backgroundColor: "white" }} elevation={1}>
      <CardContent>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mr: 2,
            textAlign: "right",
            fontSize: "40px",
          }}
        >
          {number}
        </Typography>

        <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold" }}>
          {title}
        </Typography>
        {lessons.map((lesson, index) => (
          <Box
            sx={{
              border: "1px solid #e4e2e2",
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              alignItems: { xs: "flex-start", sm: "flex-start", md: "center" },
              borderRadius: 2,
              mb: 2,
              "&:hover": {
                boxShadow: "1px 0px 8px #ff950070",
                cursor: "pointer",
              },

              "&:hover .lesson-duration": {
                backgroundColor: "#ff950070",
              },
              "&:hover .lesson-name": {
                fontWeight: "bold",
              },
            }}
          >
            <Box className="lesson-name">
              <Typography variant="body1" fontWeight={"550"}>
                {lesson.name}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                lesson {lesson.number}
              </Typography>
            </Box>
            <Typography
              className="lesson-duration"
              color="textSecondary"
              sx={{
                p: 1,
                backgroundColor: theme.palette.primary.light,
                borderRadius: 2,
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 0.2,
              }}
            >
              <AccessTimeIcon /> {lesson.duration}
            </Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default CourseCard;
