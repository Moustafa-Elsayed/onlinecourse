// Goals.js
import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";
import CustomCard from "./CustomCard";

import theme from "@/styles/theme";
import { goalsdData } from "@/lib/dummyData/aboutus/aboutus";

const Root = styled(Box)(({ theme }) => ({
  padding: { xs: 0, sm: 0, md: theme.spacing(4) },
  marginTop:"45px"
}));

const cardData =goalsdData

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

export default Goals;
