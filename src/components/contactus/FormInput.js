import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import CustomInput from "../shared/CustomInput";
import CustomButton from "../shared/CustomButton";
import theme from "@/styles/theme";
import { showToast } from "../shared/showToast"; // Import showToast function

const FormInput = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log('Form Data:', formData); // Log form data
    showToast('Message sent successfully!', 'success'); // Show success toast
    
    // Reset form fields
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}> {/* Wrap the form with <form> */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <CustomInput
            type="text"
            label="First Name"
            name="firstName" // Add name attribute
            placeholder="Enter your First Name"
            value={formData.firstName} // Bind value
            onChange={handleInputChange} // Handle input change
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomInput
            type="text"
            label="Last Name"
            name="lastName" // Add name attribute
            placeholder="Enter your Last Name"
            value={formData.lastName} // Bind value
            onChange={handleInputChange} // Handle input change
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomInput
            type="email"
            label="Email"
            name="email" // Add name attribute
            placeholder="Enter your Email"
            value={formData.email} // Bind value
            onChange={handleInputChange} // Handle input change
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomInput
            type="text"
            label="Phone"
            name="phone" // Add name attribute
            placeholder="Enter Phone Number"
            value={formData.phone} // Bind value
            onChange={handleInputChange} // Handle input change
          />
        </Grid>
        <Grid item xs={12}>
          <CustomInput
            type="text"
            label="Subject"
            name="subject" // Add name attribute
            placeholder="Enter your Subject"
            value={formData.subject} // Bind value
            onChange={handleInputChange} // Handle input change
          />
        </Grid>
        <Grid item xs={12}>
          <CustomInput
            type="text"
            label="Message"
            name="message" // Add name attribute
            multiline
            rows={4}
            placeholder="Enter your Message"
            value={formData.message} // Bind value
            onChange={handleInputChange} // Handle input change
          />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CustomButton
              title="Send Your Message"
              backgroundColor={theme.palette.secondary.main}
              color="white"
              type="submit" // Change button type to submit
            />
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default FormInput;
