import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import CustomButton from "../shared/CustomButton";
import theme from "@/styles/theme";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import Image from "next/image";
import useButtonClickHandler from "@/hooks/useButtonClickHandler";
import images from "../../../public/Image/index";
const Banner = () => {
  const handleCoursesRoute = useButtonClickHandler("/courses");
  const handlePricingRoute = useButtonClickHandler("/pricing");

  return (
    <Container sx={{ textAlign: "center", backgroundColor: "#f7f7f7" }}>
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
      <ImageGrid images={images} />
    </Container>
  );
};
const ImageGrid = ({ images }) => (
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
    {images.map((img, index) => (
      <Grid item key={index}>
        <div className="image-wrapper">
          <Image
            src={img.src}
            width={140}
            height={140}
            alt={img.alt}
            priority={img.priority}
          />
        </div>
      </Grid>
    ))}
  </Grid>
);

export default Banner;
