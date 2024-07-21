import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import CustomButton from "@/components/shared/CustomButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { loginData } from "@/lib/dummyData/loginData/loginData";
import theme from "@/styles/theme";

const testimonials = loginData;

const Index = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const handleNext = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentCard(
      (prevCard) => (prevCard - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 0,
      }}
    >
      <Box
        sx={{
          maxWidth: "500px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontWeight: "bold",
              textAlign: "left",
              mb: 2,
              fontSize: "25px",
            }}
          >
            Students Testimonials
          </Typography>
          <Typography
            sx={{ textAlign: "left", color: theme.palette.primary.lightgrey }}
          >
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </Typography>
        </Box>
        <Box sx={{ mt: 4, backgroundColor: "white", p: 2, borderRadius: 2 }}>
          <Typography sx={{ mb: 1 }}>
            {testimonials[currentCard].text}
          </Typography>
          <hr />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Image
                src={testimonials[currentCard].image}
                alt="personImage"
                width={50}
                height={50}
              />
              <Typography sx={{ fontWeight: "bold" }}>
                {testimonials[currentCard].name}
              </Typography>
            </Box>
            <CustomButton title={"read more"} backgroundColor={"#f8f5f5"} />
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", mt: 2, gap: 2 }}
        >
          <Button
            onClick={handlePrevious}
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              p: 1,
              minWidth: 0,
            }}
          >
            <ArrowBackIcon />
          </Button>
          <Button
            onClick={handleNext}
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              p: 1,
              minWidth: 0,
            }}
          >
            <ArrowForwardIcon />
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: "500px",
          display: "flex",
          backgroundColor: "white",
          border: "1px solid red",
          width: "100%",
          height: "100%",
        }}
      >
        <Typography>jdfjgfj</Typography>
      </Box>
    </Box>
  );
};

export default Index;
