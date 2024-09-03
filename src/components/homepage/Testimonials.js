import { loginData } from "@/lib/dummyData/loginData/loginData";
import { Box, Typography } from "@mui/material";
import React from "react";
import TestimonialsSection from "./TestimonialsSection ";
const testimonials = loginData;
const Testimonials = () => {
  return (
    <>
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
          <Typography variant="h4" color="textSecondary">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </Typography>
        </Box>
      </Box>
      <TestimonialsSection testimonials={testimonials} />
    </>
  );
};

export default Testimonials;
