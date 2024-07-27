import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material";

const CourseCard = ({
  image,
  title,
  duration,
  level,
  instructor,
  description,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {duration} • {level} • By {instructor}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Get It Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
