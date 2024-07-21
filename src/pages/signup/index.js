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
const index = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [ShowPaasword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");

  const [password, setPassword] = useState("");

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
  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    setEmail("");
    setPassword("");
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
          <Typography sx={{ mb: 3 }}>
            {testimonials[currentCard].text}
          </Typography>
          <DividerWithText />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 5,
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
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "center", md: "flex-end" },
            mt: 2,
            gap: 2,
          }}
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
          Sign Up
        </Typography>
        <Typography>
          Create an account to unlock exclusive features.{" "}
        </Typography>
        <form
          onSubmit={handleLogin}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CustomInput
            type={"text"}
            label="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your Email"
          />
          <CustomInput
            type={"email"}
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
          />
          <CustomInput
            type={ShowPaasword ? "text" : "password"}
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
            endIcon={
              <IconButton onClick={handleShowPassword}>
                <RemoveRedEyeIcon />
              </IconButton>
            }
          />
          <Typography
            href={""}
            style={{
              textAlign: "center",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            I agree with{" "}
            <Link
              style={{
                textDecoration: "underline",
                marginRight: "8px",
              }}
              href={"/signup"}
            >
              Terms of Use
            </Link>
            and
            <Link
              style={{
                textDecoration: "underline",
                marginLeft: "8px",
              }}
              href={"/signup"}
            >
              Privacy Policy
            </Link>{" "}
          </Typography>
          <CustomButton
            type="submit"
            title="Login"
            color="white"
            backgroundColor={theme.palette.secondary.main}
          />
        </form>
        <DividerWithText text="OR" />

        <CustomButton
          title={"Login with Google"}
          backgroundColor={theme.palette.primary.light}
          imageUrl={Google}
          imageAlt="button image"
          imagePosition="start"
        />
        <Typography>
        Already have an account? 
          <Link
            style={{
              textDecoration: "underline",
              marginLeft: "5px",
            }}
            href={"/login"}
          >
            Login
          </Link>
          <ArrowOutwardIcon />
        </Typography>
      </Box>
    </Box>
  );
};

export default index;
