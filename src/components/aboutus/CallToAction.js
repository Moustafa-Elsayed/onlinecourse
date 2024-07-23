// CallToAction.js
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import theme from "@/styles/theme";
import CustomButton from "../shared/CustomButton";

const Root = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
  backgroundColor: "white",
  display: "flex",
  alignItems:"center",
  justifyContent:"center"
}));

const CTAButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const CallToAction = () => {
  return (
    <Root>
      <Box sx={{ flexGrow: 1, textAlign: "left", }}>
        <Box
          gutterBottom
          sx={{
            fontWeight: "bold",
            display: "flex",
            alignItems: "flex-start",
            maxWidth: "50%",
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            <Typography
              variant="h2"
              component="span"
              sx={{ color: theme.palette.secondary.main, fontWeight: "bold" }}
            >
              Together
            </Typography>
            , let's shape the future of digital innovation
          </Typography>
        </Box>
        <Typography variant="body2" gutterBottom color="textSecondary">
          Join us in this exciting journey to grow and unlock your potential in
          design and development.
        </Typography>
      </Box>
<Box>

<CustomButton
        backgroundColor={theme.palette.secondary.main}
        title={" Join Now"}
        width={"100%"}
        color={"white"}
      />
</Box>
      
    </Root>
  );
};

export default CallToAction;
