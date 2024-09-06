import React from "react";
import { TextField, Box, Typography, InputAdornment } from "@mui/material";
import { styled } from "@mui/system";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.light, 
    borderRadius: "8px", 
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#f5f0f0", 
    },
    "&:hover fieldset": {
      border: "1px solid transparent", 
    },
    "&.Mui-focused fieldset": {
      border: `1px solid ${theme.palette.secondary.main}`, 
    },
  },
}));

const CustomInput = ({ label,type,multiline, placeholder, endIcon, ...props }) => {
  return (
    <Box sx={{ margin: 1 }}>
      <Typography sx={{ textAlign: "left", mb: 1, fontWeight: "bold" }}>{label}</Typography>
      <CustomTextField
        variant="outlined"
        fullWidth
        {...props}
        multiline={multiline}
        placeholder={placeholder}
        type={type}
        InputProps={{
          endAdornment: endIcon ? <InputAdornment position="end">{endIcon}</InputAdornment> : null,
        }}
      />
    </Box>
  );
};

export default CustomInput;
