import React from "react";
import { Typography, Box } from "@mui/material";

const Cancel = () => {
  return (
    <Box sx={{ padding: 2, maxWidth: "800px", margin: "auto" }}>
      <Typography variant="h3" align="center" mb={5}>
        Payment Canceled
      </Typography>
      <Typography variant="body1" align="center">
        You have canceled your payment. You can try again or contact support if you need help.
      </Typography>
    </Box>
  );
};

export default Cancel;
