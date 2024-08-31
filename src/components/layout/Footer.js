import React from "react";
import {
  Container,
  Grid,
  Typography,
  Link,
  Box,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import Image from "next/image";
import Logo from "../../../public/Image/Logo.webp";

const iconStyles = {
  mr: 1,
};

const iconButtonStyles = {
  backgroundColor: "#c4c4c442",
  borderRadius: 1,
  p: 1,
};

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: { xs: 5, sm: 8, md: 10 }, bgcolor: "background.paper", mt: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Box display="flex" flexDirection="column" alignItems="start">
              <Box mb={2}>
                <Image src={Logo} width={45} height={45} alt="logo" />
              </Box>
              <Box display="flex" flexDirection="column" alignItems="flex-start">
                <ContactItem icon={<EmailIcon sx={iconStyles} />} text="hello@skillbridge.com" />
                <ContactItem icon={<PhoneIcon sx={iconStyles} />} text="+91 91813 23 2309" />
                <ContactItem icon={<PlaceIcon sx={iconStyles} />} text="Somewhere in the World" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FooterLinkSection title="Home" links={[
              { text: "Benefits", href: "#" },
              { text: "Our Courses", href: "#" },
              { text: "Our Testimonials", href: "#" },
              { text: "Our FAQ", href: "#" },
            ]} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FooterLinkSection title="About Us" links={[
              { text: "Company", href: "#" },
              { text: "Achievements", href: "#" },
              { text: "Our Goals", href: "#" },
            ]} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Social Profiles
            </Typography>
            <Box display="flex" gap={1}>
              <IconButton href="#" color="inherit" sx={iconButtonStyles} aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton href="#" color="inherit" sx={iconButtonStyles} aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton href="#" color="inherit" sx={iconButtonStyles} aria-label="LinkedIn">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            &copy; {new Date().getFullYear()} Skillbridge. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

const ContactItem = ({ icon, text }) => (
  <Box display="flex" alignItems="center" mb={1}>
    {icon}
    <Typography variant="body2">{text}</Typography>
  </Box>
);

const FooterLinkSection = ({ title, links }) => (
  <>
    <Typography variant="h6" fontWeight="bold" gutterBottom>
      {title}
    </Typography>
    {links.map((link, index) => (
      <Link key={index} sx={{ textDecoration: "none" }} href={link.href} variant="body2" display="block" color="inherit" gutterBottom={index < links.length - 1}>
        {link.text}
      </Link>
    ))}
  </>
);

export default Footer;
