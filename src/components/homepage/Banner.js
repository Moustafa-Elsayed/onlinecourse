import React from "react";
import { Container, Typography, Button, Grid, Box } from "@mui/material";
import CustomButton from "../shared/CustomButton";
import theme from "@/styles/theme";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import Adobe from "../../../public/Image/adobe.png";
import Amazon from "../../../public/Image/amazon.png";
import Netflix from "../../../public/Image/netflix.png";
import Notion from "../../../public/Image/notion.png";
import Spotify from "../../../public/Image/spotify.png";
import Zapier from "../../../public/Image/zapier.png";
import Zoom from "../../../public/Image/zoom.png";
import Image from "next/image";
import useButtonClickHandler from "@/hooks/useButtonClickHandler";

const Banner = () => {

  const handleCoursesRoute = useButtonClickHandler("/courses");
  const handlePricingRoute = useButtonClickHandler("/pricing");

  return (
    <Container
      sx={{
        textAlign: "center",
        padding: 4,
        backgroundColor: "#f7f7f7",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          mb: 2,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#FFF9F0",
            borderRadius: 1,
            border: "1px solid #FFEACC",
            p:1
          }}
        >
          <ElectricBoltIcon />
        </Box>
        <Typography sx={{fontWeight:"bold"}} variant="h4">Unlock Your Creative Potential</Typography>
      </Box>
      <Typography variant="h3" sx={{ mb: 2 }}>
        with Online Design and Development Courses.
      </Typography>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Learn from Industry Experts and Enhance Your Skills.
      </Typography>
      <Box mt={2} gap={2} display={"flex"} justifyContent={"center"}>
        <CustomButton
          title={"Explore Courses"}
          backgroundColor={theme.palette.secondary.main}
          onClick={handleCoursesRoute}
        />
        <CustomButton title={"View Pricing"} backgroundColor={"white"} 
          onClick={handlePricingRoute}

        />
      </Box>
      <Grid
        container
        spacing={0}
        justifyContent="center"
        sx={{
          marginTop: 10,
          marginBottom: 8,
          backgroundColor: "white",
          borderRadius: 2,
        }}
      >
        <Grid item>
          <Image src={Adobe} width={140} height={140} alt="Adobe" />
        </Grid>
        <Grid item>
          <Image src={Amazon} width={140} height={140} alt="Amazon" />
        </Grid>
        <Grid item>
          <Image src={Netflix} width={140} height={140} alt="Netflix" />
        </Grid>
        <Grid item>
          <Image src={Notion} width={140} height={140} alt="Notion" />
        </Grid>
        <Grid item>
          <Image src={Spotify} width={140} height={140} alt="Spotify" />
        </Grid>
        <Grid item>
          <Image src={Zapier} width={140} height={140} alt="Zapier" />
        </Grid>
        <Grid item>
          <Image src={Zoom} width={140} height={140} alt="Zoom" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
