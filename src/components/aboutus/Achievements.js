import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import CustomCard from "./CustomCard";
import theme from "@/styles/theme";
import { cardAboutUSData } from "@/lib/dummyData/aboutus/aboutus";
const Root = styled(Box)(({ theme }) => ({
  padding: { xs: 0, sm: 0, md: theme.spacing(4) },
  backgroundColor: "#f8f9fa",
  marginTop:"45px"

}));

const cardData =cardAboutUSData
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
            <Grid item xs={12} sm={6} md={6} key={index}>
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
