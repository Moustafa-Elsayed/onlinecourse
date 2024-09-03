import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import CustomInput from "../shared/CustomInput";
import CustomButton from "../shared/CustomButton";
import theme from "@/styles/theme";
import { showToast } from "../shared/showToast";

const FormInput = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    showToast("Message sent successfully!", "success");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        {[
          {
            label: "First Name",
            name: "firstName",
            type: "text",
            placeholder: "Enter your First Name",
          },
          {
            label: "Last Name",
            name: "lastName",
            type: "text",
            placeholder: "Enter your Last Name",
          },
          {
            label: "Email",
            name: "email",
            type: "email",
            placeholder: "Enter your Email",
          },
          {
            label: "Phone",
            name: "phone",
            type: "text",
            placeholder: "Enter Phone Number",
          },
          {
            label: "Subject",
            name: "subject",
            type: "text",
            placeholder: "Enter your Subject",
          },
          {
            label: "Message",
            name: "message",
            type: "text",
            placeholder: "Enter your Message",
            multiline: true,
            rows: 4,
          },
        ].map(({ label, name, type, placeholder, multiline, rows }) => (
          <Grid item xs={12} sm={6} key={name}>
            <CustomInput
              type={type}
              label={label}
              name={name}
              placeholder={placeholder}
              value={formData[name]}
              onChange={handleInputChange}
              multiline={multiline}
              rows={rows}
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CustomButton
              title="Send Your Message"
              backgroundColor={theme.palette.secondary.main}
              color="white"
              type="submit"
            />
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default FormInput;
