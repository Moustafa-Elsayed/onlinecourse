import React from "react";
import { Grid, Box } from "@mui/material";
import TestimonialsCard from "../shared/TestimonialsCard";

const TestimonialsSection = ({ testimonials }) => {
  return (
    <Grid container spacing={3}>
      {testimonials.map((testimonial, index) => (
        <Grid item xs={12} sm={6} md={6} key={index}>
          <TestimonialsCard testimonial={testimonial} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TestimonialsSection;
