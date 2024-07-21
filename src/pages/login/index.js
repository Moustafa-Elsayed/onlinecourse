import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import CustomButton from "@/components/shared/CustomButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { loginData } from "@/lib/dummyData/loginData/loginData";
import theme from "@/styles/theme";
import CustomInput from "@/components/shared/CustomInput";
import Google from "../../../public/Image/Icon.png";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Link from "next/link";
import RememberMeCheckbox from "@/components/shared/RememberMeCheckbox";
import DividerWithText from "@/components/shared/DividerWithText";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
const testimonials = loginData;

const Index = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [ShowPaasword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!ShowPaasword);
  };

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
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap-reverse",
        gap: 5,
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
          <DividerWithText />
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
            <CustomButton
              title={"read more"}
              backgroundColor={theme.palette.primary.light}
            />
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
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "650px",
          p: 2,
        }}
      >
        <Typography sx={{ fontWeight: "bold" }} variant="h1">
          Login
        </Typography>
        <Typography>
          Welcome back! Please log in to access your account.
        </Typography>
        <CustomInput
          type={"email"}
          label="Email"
          placeholder="Enter your Email"
        />
        <CustomInput
          type={ShowPaasword ? "text" : "password"}
          label="Password"
          placeholder="Enter your Password"
          endIcon={
            <IconButton onClick={handleShowPassword}>
              <RemoveRedEyeIcon />
            </IconButton>
          }
        />
        <Link href={""} style={{ textAlign: "right" }}>
          Forgot Password?
        </Link>
        <RememberMeCheckbox />
        <CustomButton
          title={"Login"}
          backgroundColor={theme.palette.secondary.main}
        />
        <DividerWithText text="OR" />

        <CustomButton
          title={"Login with Google"}
          backgroundColor={theme.palette.primary.light}
          imageUrl={Google}
          imageAlt="button image"
          imagePosition="start"
        />
        <Typography>
          Don’t have an account?
          <Link
            style={{
              textDecoration: "underline",
            }}
            href={"/signup"}
          >
            Sign Up
          </Link>
          <ArrowOutwardIcon />
        </Typography>
      </Box>
    </Box>
  );
};

export default Index;
