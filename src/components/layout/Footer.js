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
import Logo from "../../../public/Image/Logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 6, bgcolor: "background.paper", mt: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={10}>
          <Grid item xs={12} sm={3}>
            <Box display="flex" flexDirection="column" alignItems="start">
              <Box mb={2}>
                <Image src={Logo} width={45} height={45} alt="logo" />
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
              >
                <Box display="flex" alignItems="center" mb={1}>
                  <EmailIcon sx={{ mr: 1 }} />
                  <Typography variant="body2">hello@skillbridge.com</Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={1}>
                  <PhoneIcon sx={{ mr: 1 }} />
                  <Typography variant="body2">+91 91813 23 2309</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <PlaceIcon sx={{ mr: 1 }} />
                  <Typography variant="body2">
                    Somewhere in the World
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Home
            </Typography>
            <Link
              sx={{ textDecoration: "none" }}
              href="#"
              variant="body2"
              display="block"
              color="inherit"
              gutterBottom
            >
              Benefits
            </Link>
            <Link
              sx={{ textDecoration: "none" }}
              href="#"
              variant="body2"
              display="block"
              color="inherit"
              gutterBottom
            >
              Our Courses
            </Link>
            <Link
              sx={{ textDecoration: "none" }}
              href="#"
              variant="body2"
              display="block"
              color="inherit"
              gutterBottom
            >
              Our Testimonials
            </Link>
            <Link
              sx={{ textDecoration: "none" }}
              href="#"
              variant="body2"
              display="block"
              color="inherit"
            >
              Our FAQ
            </Link>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Link
              sx={{ textDecoration: "none" }}
              href="#"
              variant="body2"
              display="block"
              color="inherit"
              gutterBottom
            >
              Company
            </Link>
            <Link
              sx={{ textDecoration: "none" }}
              href="#"
              variant="body2"
              display="block"
              color="inherit"
              gutterBottom
            >
              Achievements
            </Link>
            <Link
              sx={{ textDecoration: "none" }}
              href="#"
              variant="body2"
              display="block"
              color="inherit"
            >
              Our Goals
            </Link>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Social Profiles
            </Typography>
            <Box display="flex">
              <IconButton href="#" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton href="#" color="inherit">
                <Twitter />
              </IconButton>
              <IconButton href="#" color="inherit">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            &copy; 2023 Skillbridge. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
