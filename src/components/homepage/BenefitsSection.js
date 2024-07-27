import React from "react";
import { Typography, Box } from "@mui/material";

import CustomButton from "../shared/CustomButton";
import theme from "@/styles/theme";
import BenefitCards from "./BenefitCards";

const benefits = [
  {
    number: "01",
    title: "Flexible Learning Schedule",
    description:
      "Fit your coursework around your existing commitments and obligations.",
  },
  {
    number: "02",
    title: "Expert Instruction",
    description:
      "Learn from industry experts who have hands-on experience in design and development.",
  },
  {
    number: "03",
    title: "Diverse Course Offerings",
    description:
      "Explore a wide range of design and development courses covering various topics.",
  },
  {
    number: "04",
    title: "Updated Curriculum",
    description:
      "Access courses with up-to-date content reflecting the latest trends and industry practices.",
  },
  {
    number: "05",
    title: "Practical Projects and Assignments",
    description:
      "Develop a portfolio showcasing your skills and abilities to potential employers.",
  },
  {
    number: "06",
    title: "Interactive Learning Environment",
    description:
      "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
  },
  {
    number: "07",
    title: "Updated Curriculum",
    description:
      "Access courses with up-to-date content reflecting the latest trends and industry practices.",
  },
  {
    number: "08",
    title: "Practical Projects and Assignments",
    description:
      "Develop a portfolio showcasing your skills and abilities to potential employers.",
  },
  {
    number: "09",
    title: "Interactive Learning Environment",
    description:
      "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
  },
];

const BenefitsSection = () => {
  return (
    <Box style={{ padding: "2rem", maxWidth: "1200px", margin: "auto" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ flexGrow: 1, maxWidth: "80%", mb: 3 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 }}>
            Benefits
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </Typography>
        </Box>

        <CustomButton
          title={"View All"}
          backgroundColor={theme.palette.primary.light}
          border="1px solid #e9e3e3"
        />
      </Box>
      <BenefitCards benefits={benefits} />
    </Box>
  );
};

export default BenefitsSection;
