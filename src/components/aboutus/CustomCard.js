// CustomCard.js
import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";

const CardContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  display: "flex",
  alignItems: "flex-start",
  gap:"12px",
  flexDirection:"column",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#ffffff",
}));

const IconContainer = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(2),
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#fff4e5",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const ContentContainer = styled(Box)({
  flex: 1,
});

const CustomCard = ({ Icon, title, description }) => {
  return (
    <CardContainer elevation={0}>
      <IconContainer>
        <Icon style={{ fontSize: 24, color: "#ff9800" }} />
      </IconContainer>
      <ContentContainer>
        <Typography variant="h6" gutterBottom sx={{fontWeight:"bold"}}>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </ContentContainer>
    </CardContainer>
  );
};

export default CustomCard;
