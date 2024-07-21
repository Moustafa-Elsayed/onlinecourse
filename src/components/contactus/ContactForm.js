import React from "react";
import { Box, TextField, Button, Typography, Grid, Paper } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CustomInput from "../shared/CustomInput";
import CustomButton from "../shared/CustomButton";
import theme from "@/styles/theme";

const ContactForm = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        p: 2,
        backgroundColor: "white",
        mt: 5,
        mb: 2,
        borderRadius: 3,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <CustomInput
                type={"text"}
                label="First Name"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your First Name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomInput
                type={"email"}
                label="Last Name"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Last Name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomInput
                type={"email"}
                label="Email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
              />{" "}
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomInput
                type={"email"}
                label="Phone"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Phone Number"
              />{" "}
            </Grid>
            <Grid item xs={12}>
              <CustomInput
                type={"email"}
                label="Subject"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Subject"
              />{" "}
            </Grid>
            <Grid item xs={12}>
              <CustomInput
                type={"text"}
                label="Message"
                multiline
                rows={4}
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
              />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CustomButton
                  title="Send Your Message"
                  backgroundColor={theme.palette.secondary.main}
                  color={"white"}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              pl: { md: 2 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: 3,
                mt: 2,
                p: 3,
                backgroundColor: theme.palette.primary.light,
                width: "80%",
              }}
            >
              <EmailIcon />
              <Typography sx={{ ml: 1 }}>support@skillbridge.com</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: 3,
                mt: 2,
                p: 3,
                backgroundColor: theme.palette.primary.light,
                width: "80%",
              }}
            >
              <PhoneIcon />
              <Typography sx={{ ml: 1 }}>+91 00000 00000</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: 3,
                mt: 2,
                p: 3,
                backgroundColor: theme.palette.primary.light,
                width: "80%",
              }}
            >
              <LocationOnIcon />
              <Typography sx={{ ml: 1 }}>Some Where in the World</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: 3,
                mt: 2,
                p: 3,
                backgroundColor: theme.palette.primary.light,
                width: "80%",
              }}
            >
              <Box>
                <FacebookIcon sx={{ mr: 1}} />
                <TwitterIcon sx={{ mr: 1 }} />
                <LinkedInIcon sx={{ mr: 1 }} />
              </Box>
              <Typography>Social Profiles</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
