import React from "react";
import { Grid, Box } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import CustomInput from "../shared/CustomInput";
import CustomButton from "../shared/CustomButton";
import theme from "@/styles/theme";
import { showToast } from "../shared/showToast";
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  phone: Yup.string().required("Phone Number is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const FormInput = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        showToast("Message sent successfully!", "success");
        resetForm(); 
      }}
    >
      {({ errors, touched, handleChange, handleSubmit, values }) => (
        <Form onSubmit={handleSubmit}>
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
                  value={values[name]}
                  onChange={handleChange}
                  multiline={multiline}
                  rows={rows}
                  error={touched[name] && Boolean(errors[name])}
                  helperText={touched[name] && errors[name]}
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
        </Form>
      )}
    </Formik>
  );
};

export default FormInput;
