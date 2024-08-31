import React from "react";
import { Grid, Box } from "@mui/material";
import CustomInput from "../shared/CustomInput";
import CustomButton from "../shared/CustomButton";
import theme from "@/styles/theme";

const FormInput = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <CustomInput
          type="text"
          label="First Name"
          placeholder="Enter your First Name"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomInput
          type="text"
          label="Last Name"
          placeholder="Enter your Last Name"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomInput
          type="email"
          label="Email"
          placeholder="Enter your Email"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <CustomInput
          type="text"
          label="Phone"
          placeholder="Enter Phone Number"
        />
      </Grid>
      <Grid item xs={12}>
        <CustomInput
          type="text"
          label="Subject"
          placeholder="Enter your Subject"
        />
      </Grid>
      <Grid item xs={12}>
        <CustomInput
          type="text"
          label="Message"
          multiline
          rows={4}
          placeholder="Enter your Message"
        />
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CustomButton
            title="Send Your Message"
            backgroundColor={theme.palette.secondary.main}
            color="white"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default FormInput;
