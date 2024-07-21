import ContactForm from "@/components/contactus/ContactForm";
import DividerWithText from "@/components/shared/DividerWithText";
import { Box, Typography } from "@mui/material";
import React from "react";

const index = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "start", sm: "start", md: "center" },
          flexDirection: { xs: "column", sm: "column", md: "row" },
        }}
      >
        <Typography variant="h1" sx={{ fontWeight: "bold" }}>
          Contact Us
        </Typography>
        <Typography variant="subtitle1" sx={{ maxWidth: "600px", mb: 2 }}>
          Welcome to SkillBridge's Pricing Plan page, where we offer two
          comprehensive options to cater to your needs: Free and Pro. We believe
          in providing flexible and affordable pricing options for our services.
          Whether you're an individual looking to enhance your skills or a
          business seeking professional development solutions, we have a plan
          that suits you. Explore our pricing options below and choose the one
          that best fits your requirements.
        </Typography>
      </Box>
      <Box sx={{ mt: 2, display: { xs: "none", sm: "none", md: "block" } }}>
        <DividerWithText />
      </Box>
      <Box>

        <ContactForm />
      </Box>
    </>
  );
};

export default index;
