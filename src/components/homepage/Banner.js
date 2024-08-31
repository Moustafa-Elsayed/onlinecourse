import React from "react";
import { Container, Typography, Button, Grid, Box } from "@mui/material";
import CustomButton from "../shared/CustomButton";
import theme from "@/styles/theme";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import Adobe from "../../../public/Image/adobe.webp";
import Amazon from "../../../public/Image/amazon.webp";
import Netflix from "../../../public/Image/netflix.webp";
import Notion from "../../../public/Image/notion.webp";
import Spotify from "../../../public/Image/spotify.webp";
import Zapier from "../../../public/Image/zapier.webp";
import Zoom from "../../../public/Image/zoom.webp";
import Image from "next/image";
import useButtonClickHandler from "@/hooks/useButtonClickHandler";

const Banner = () => {
  const handleCoursesRoute = useButtonClickHandler("/courses");
  const handlePricingRoute = useButtonClickHandler("/pricing");

  return (
    <Container
      sx={{
        textAlign: "center",
        backgroundColor: "#f7f7f7",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#FFF9F0",
            borderRadius: 1,
            border: "1px solid #FFEACC",
            p: { sm: 0, md: 1 },
          }}
        >
          <ElectricBoltIcon />
        </Box>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { sm: "16px", md: "28px", lg: "38px" },
          }}
        >
          Unlock Your Creative Potential
        </Typography>
      </Box>
      <Typography
        sx={{ mb: 2, fontSize: { sm: "16px", md: "18px", lg: "28px" } }}
      >
        with Online Design and Development Courses.
      </Typography>
      <Typography
        color="textSecondary"
        sx={{ fontSize: { sm: "14px", md: "16px", lg: "16px" } }}
        gutterBottom
      >
        Learn from Industry Experts and Enhance Your Skills.
      </Typography>
      <Box mt={2} gap={2} display={"flex"} justifyContent={"center"}>
        <CustomButton
          title={"Explore Courses"}
          backgroundColor={theme.palette.secondary.main}
          onClick={handleCoursesRoute}
          color="white"
        />
        <CustomButton
          title={"View Pricing"}
          backgroundColor={"white"}
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
          <div className="image-wrapper">
            <Image src={Adobe} width={140} height={140} alt="Adobe" />
          </div>
        </Grid>
        <Grid item>
          <div className="image-wrapper">
            <Image src={Amazon} width={140} height={140} alt="Amazon" />
          </div>
        </Grid>
        <Grid item>
          <div className="image-wrapper">
            <Image src={Netflix} width={140} height={140} alt="Netflix" />
          </div>
        </Grid>
        <Grid item>
          <div className="image-wrapper">
            <Image src={Notion} width={140} height={140} alt="Notion" />
          </div>
        </Grid>
        <Grid item>
          <div className="image-wrapper">
            <Image src={Spotify} width={140} height={140} alt="Spotify" />
          </div>
        </Grid>
        <Grid item>
          <div className="image-wrapper">
            <Image src={Zapier} width={140} height={140} alt="Zapier" />
          </div>
        </Grid>
        <Grid item>
          <div className="image-wrapper">
            <Image src={Zoom} width={140} height={140} alt="Zoom" />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
