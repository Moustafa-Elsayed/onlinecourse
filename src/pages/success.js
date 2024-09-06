import React from "react";
import { Typography, Box } from "@mui/material";

const Success = () => {
  return (
    <Box sx={{ padding: 2, maxWidth: "800px", margin: "auto" }}>
      <Typography variant="h3" align="center" mb={5}>
        Payment Successful!
      </Typography>
      <Typography variant="body1" align="center">
        Thank you for your purchase.
      </Typography>
    </Box>
  );
};

export default Success;
