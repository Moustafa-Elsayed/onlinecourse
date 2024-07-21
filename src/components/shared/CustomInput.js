import React from "react";
import { TextField, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    color: theme.palette.primary.main,
    backgroundColor: "#f9f9f9", // Customize background color
    borderRadius: "8px", // Customize border radius
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#f5f0f0", // Remove the border
    },
    "&:hover fieldset": {
      border: "1px solid transparent", // Remove the border on hover
    },
    "&.Mui-focused fieldset": {
        border:`1px solid ${theme.palette.secondary.main} `, // Remove the border when focused
    },
  },
}));

const CustomInput = ({ label, placeholder, ...props }) => {
  return (
    <Box sx={{ margin: 1 }}>
      <Typography sx={{ textAlign: "left", mb: 1, fontWeight: "bold" }}>{label}</Typography>
      <CustomTextField variant="outlined" fullWidth {...props} placeholder={placeholder} />
    </Box>
  );
};

export default CustomInput;
