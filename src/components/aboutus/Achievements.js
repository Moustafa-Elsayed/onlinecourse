// Achievements.js
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import CustomCard from "./CustomCard";
import CachedIcon from "@mui/icons-material/Cached";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import theme from "@/styles/theme";

const Root = styled(Box)(({ theme }) => ({
  padding: { xs: 0, sm: 0, md: theme.spacing(4) },
  backgroundColor: "#f8f9fa",
  marginTop:"45px"

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

const Achievements = () => {
  return (
    <Root>
      <Box sx={{ p: { xs: 0, sm: 0, md: theme.spacing(4) } }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          Achievements
        </Typography>
        <Typography sx={{ mb: 4 }}>
          Our commitment to excellence has led us to achieve significant
          milestones along our journey. Here are some of our notable
          achievements
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

export default Achievements;
