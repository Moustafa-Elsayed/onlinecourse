import React from "react";
import { Typography, Box, Container } from "@mui/material";
import BenefitCards from "./BenefitCards";
import { benefitsData } from "@/lib/dummyData/homepage/homepage";

const benefits = benefitsData;

const BenefitsSection = () => (
  <Container maxWidth="lg">
    <Box sx={{ mb: 3 }}>
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 }}>
        Benefits
      </Typography>
      <Typography variant="h4" color="textSecondary">
        Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit
        id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
        habitasse in velit fringilla feugiat senectus in.
      </Typography>
    </Box>
    <BenefitCards benefits={benefits} />
  </Container>
);

export default BenefitsSection;
