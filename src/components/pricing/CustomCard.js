// Import necessary Material-UI components
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import theme from "@/styles/theme";
import CustomButton from "../shared/CustomButton";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

const CustomCard = ({ Plan, price, features,type }) => {
  return (
    <Card
      sx={{
        maxWidth: 550,
        borderRadius: 2,
        backgroundColor: theme.palette.primary.light,
        border: `1px solid #f5eaea`,

      }}
      elevation={0}
    >
      <CardContent sx={{ p: 2 }}>
        <Box textAlign="center" mb={2}>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{
              border: "1px solid #FFEACC",
              p: 0.5,
              borderRadius: 1,
              backgroundColor: "#FFF9F0",
            }}
          >
            {Plan} Plan
          </Typography>
          <Typography variant="h3" color="text.primary" sx={{ my: 1 }}>
            ${price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            /{type}
          </Typography>
        </Box>
        <Box textAlign="center" mb={2}>
          <Typography variant="subtitle1" color="text.primary">
            Available Features
          </Typography>
        </Box>
        <List
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
            pb: 0,
            overflow: "hidden",
          }}
        >
          {Array.isArray(features) && features.length > 0 ? (
            features.map((feature, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  {feature.available ? (
                    <Box
                      sx={{
                        backgroundColor: "#FFF9F0",
                        borderRadius: 1,
                        border: "1px solid #FFEACC",
                      }}
                    >
                      <CheckIcon />
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        backgroundColor: theme.palette.primary.light,
                        borderRadius: 1,
                        border: "1px solid #FFEACC",
                      }}
                    >
                      <ClearIcon />
                    </Box>
                  )}
                </ListItemIcon>
                <ListItemText primary={feature.text} />
              </ListItem>
            ))
          ) : (
            <ListItem>
              <ListItemText primary="No features available" />
            </ListItem>
          )}
          <Box textAlign="center">
            <CustomButton
              title={"Get Started"}
              backgroundColor={theme.palette.secondary.main}
              width={"100%"}
              borderRadius={"0"}
              color={"white"}
            />
          </Box>
        </List>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
