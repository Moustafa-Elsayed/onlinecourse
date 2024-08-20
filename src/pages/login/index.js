import { Box, Button, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import CustomButton from "@/components/shared/CustomButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { loginData } from "@/lib/dummyData/loginData/loginData";
import theme from "@/styles/theme";
import CustomInput from "@/components/shared/CustomInput";
import GoogleIcon from "../../../public/Image/Icon.png";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Link from "next/link";
import RememberMeCheckbox from "@/components/shared/RememberMeCheckbox";
import DividerWithText from "@/components/shared/DividerWithText";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { BaseUrl } from "@/lib/api/constants";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setUserData } from "@/redux/slices/userSlice";
import { showToast } from "@/components/shared/showToast";

const TESTIMONIALS = loginData;

const AuthPage = () => {
  const dispatch = useDispatch();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [avatar, setAvatar] = useState(null); // Avatar state

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) setEmail(savedEmail);
  }, []);

  const handleShowPasswordToggle = () => setShowPassword(!showPassword);

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePreviousTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    localStorage.setItem("email", value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${BaseUrl}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Save token and role in cookies
        Cookies.set("token", data?.data?.token, { expires: 7 });
        Cookies.set("role", data?.data?.role);

        showToast("Login successful!", "success");

        // Dispatch user data to Redux store
        dispatch(setUserData(data?.data));

        // Redirect after Redux store is updated
        setTimeout(() => {
          window.location.href = "/";
        }, 50);
      } else {
        const errorData = await response.json();
        showToast(
          errorData.message ||
            "username or password incorect  Please try again.",
          "error"
        );
      }
    } catch (error) {
      console.error("Error during login:", error);
      showToast("An error occurred. Please try again.", "error");
    }
    setPassword("");
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    if (avatar) {
      formData.append("avatar", avatar);
    }

    try {
      const response = await fetch(`${BaseUrl}/users/register`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();

        showToast("Registration successful!", "success");
        dispatch(setUserData(data?.data));
        window.location.href = "/login";
      } else {
        const errorData = await response.json();
        showToast(
          errorData.message || "Registration failed. Please try again.",
          "error"
        );
      }
    } catch (error) {
      console.error("Error during signup:", error);
      showToast(
        "An error occurred during registration. Please try again.",
        "error"
      );
    }
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
          <Typography sx={{ mb: 3, minHeight: "100px" }}>
            {TESTIMONIALS[currentTestimonial].text}
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
                src={TESTIMONIALS[currentTestimonial].image}
                alt="personImage"
                width={50}
                height={50}
              />
              <Typography sx={{ fontWeight: "bold" }}>
                {TESTIMONIALS[currentTestimonial].name}
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
            onClick={handlePreviousTestimonial}
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
            onClick={handleNextTestimonial}
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
          borderRadius: 5,
        }}
      >
        <Typography sx={{ fontWeight: "bold" }} variant="h1">
          {isLogin ? "Login" : "Sign Up"}
        </Typography>
        <Typography>
          {isLogin
            ? "Welcome back! Please log in to access your account."
            : "Create an account to unlock exclusive features."}
        </Typography>
        <form
          onSubmit={isLogin ? handleLogin : handleRegister}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {!isLogin && (
            <CustomInput
              type="text"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          )}
          <CustomInput
            type="email"
            label="Email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your Email"
          />
          <CustomInput
            type={showPassword ? "text" : "password"}
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
            endIcon={
              <IconButton onClick={handleShowPasswordToggle}>
                <RemoveRedEyeIcon />
              </IconButton>
            }
          />
          {!isLogin && (
            <CustomInput
              type="file"
              label="Profile Avatar"
              onChange={handleAvatarChange}
              accept="image/*"
            />
          )}
          <Box>
            <RememberMeCheckbox />
          </Box>
          <CustomButton
            title={isLogin ? "Login" : "Sign Up"}
            backgroundColor={theme.palette.primary.light}
            type="submit"
          />
        </form>
        <Typography>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <Link
            href="#"
            onClick={() => setIsLogin(!isLogin)}
            style={{ color: "blue", textDecoration: "underline" }}
          >
            {isLogin ? "Sign Up" : "Login"}
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default AuthPage;
