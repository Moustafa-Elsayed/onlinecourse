import React from "react";
import { Box, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import theme from "@/styles/theme";

const ContactDetails = () => {
  return (
    <Box
      sx={{
        pl: { md: 2 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        borderLeft: { xs: "none", sm: "none", md: "1px solid #c4c4c442" },
      }}
    >
      <ContactInfo icon={<EmailIcon />} text="support@skillbridge.com" />
      <ContactInfo icon={<PhoneIcon />} text="+91 00000 00000" />
      <ContactInfo icon={<LocationOnIcon />} text="Somewhere in the World" />
      <SocialProfiles />
    </Box>
  );
};

const ContactInfo = ({ icon, text }) => (
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
    <Box sx={{ backgroundColor: "#c4c4c442", p: 0.5, borderRadius: 1 }}>
      {icon}
    </Box>
    <Typography sx={{ ml: 1 }}>{text}</Typography>
  </Box>
);

const SocialProfiles = () => (
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
    <Box sx={{ display: "flex", gap: 1 }}>
      <SocialIcon icon={<FacebookIcon />} />
      <SocialIcon icon={<TwitterIcon />} />
      <SocialIcon icon={<LinkedInIcon />} />
    </Box>
    <Typography>Social Profiles</Typography>
  </Box>
);

const SocialIcon = ({ icon }) => (
  <Box sx={{ backgroundColor: "#c4c4c442", p: 0.5, borderRadius: 1 }}>
    {icon}
  </Box>
);

export default ContactDetails;
