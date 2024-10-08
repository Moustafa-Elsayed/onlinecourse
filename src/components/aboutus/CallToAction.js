import React from "react";
import { Box, Typography } from "@mui/material";
import theme from "@/styles/theme";
import CustomButton from "../shared/CustomButton";
import useButtonClickHandler from "@/hooks/useButtonClickHandler";
const CallToAction = () => {
  const handleJoin = useButtonClickHandler("/login");
  return (
    <Box
      sx={{
        textAlign: "center",
        p: { xs: 0, sm: 0, md: theme.spacing(4) },
        mt: 4,
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          width: "100%",
          p: { xs: 1, sm: 1, md: theme.spacing(4) },
          borderRadius: "10px",
          display: "flex",
          alignItems: { xs: "flex-start", sm: "flex-start", md: "center" },
          justifyContent: "center ",
          flexDirection: { xs: "column", sm: "column", md: "row" },
        }}
      >
        <Box sx={{ flexGrow: 1, textAlign: "left" }}>
          <Box
            gutterBottom
            sx={{
              fontWeight: "bold",
              display: "flex",
              alignItems: "flex-start",
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
              , let&apos;s shape the future of digital innovation
            </Typography>
          </Box>
          <Typography
            sx={{ mt: 2, mb: 2 }}
            variant="body2"
            gutterBottom
            color="textSecondary"
          >
            Join us in this exciting journey to grow and unlock your potential
            in design and development.
          </Typography>
        </Box>
        <Box>
          <CustomButton
            backgroundColor={theme.palette.secondary.main}
            title={" Join Now"}
            width={"100%"}
            color={"white"}
            onClick={handleJoin}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CallToAction;
