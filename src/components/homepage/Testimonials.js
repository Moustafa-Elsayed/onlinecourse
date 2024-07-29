import { loginData } from "@/lib/dummyData/loginData/loginData";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Grid } from "react-loader-spinner";
import TestimonialsCard from "../shared/TestimonialsCard";
const testimonials = loginData;
const Testimonials = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          mb: 2,
        }}
      >
        <Box sx={{ flexGrow: 1, maxWidth: "80%", mb: 1 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 }}>
            Our Testimonials
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            sx={{ flex: "1 1 calc(50% - 16px)", boxSizing: "border-box" }}
          >
            <TestimonialsCard testimonial={testimonial} />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Testimonials;
