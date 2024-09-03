import React from "react";
import { Box, Grid } from "@mui/material";
import FormInput from "./FormInput";
import ContactDetails from "./ContactDetails";

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
          <FormInput />
        </Grid>
        <Grid item xs={12} md={4}>
          <ContactDetails />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
