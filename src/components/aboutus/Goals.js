// Goals.js
import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";
import CustomCard from "./CustomCard";
import CachedIcon from "@mui/icons-material/Cached";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import theme from "@/styles/theme";

const Root = styled(Box)(({ theme }) => ({
  padding: { xs: 0, sm: 0, md: theme.spacing(4) },
  marginTop:"45px"
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Icon = styled("i")(({ theme }) => ({
  fontSize: 40,
  marginBottom: theme.spacing(1),
}));
const cardData = [
  {
    Icon: CachedIcon,
    title: "Trusted by Thousands",
    description:
      "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
  },
  {
    Icon: EmojiEventsIcon,
    title: "Award-Winning Courses",
    description:
      "Our courses have received numerous awards for their quality, depth of content, and teaching methodologies.",
  },
  {
    Icon: PeopleIcon,
    title: "Positive Student Feedback",
    description:
      "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course material.",
  },
  {
    Icon: SchoolIcon,
    title: "Industry Partnerships",
    description:
      "We have built strong partnerships with industry leaders, enabling us to provide students with access to the latest tools and technologies.",
  },
];
const Goals = () => {
  return (
    <Root>
      <Box sx={{ p: { xs: 0, sm: 0, md: theme.spacing(4) } }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          Our Goals{" "}
        </Typography>
        <Typography sx={{ mb: 4 }}>
          At SkillBridge, our goal is to empower individuals from all
          backgrounds to thrive in the world of design and development. We
          believe that education should be accessible and transformative,
          enabling learners to pursue their passions and make a meaningful
          impact. Through our carefully crafted courses, we aim to
        </Typography>
        <Grid container spacing={3}>
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <CustomCard
                Icon={card.Icon}
                title={card.title}
                description={card.description}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Root>
  );
};

export default Goals;
