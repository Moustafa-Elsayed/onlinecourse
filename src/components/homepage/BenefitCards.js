import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useTheme } from "@mui/material/styles";

const BenefitCards = ({ benefits }) => {
  const [open, setOpen] = useState(false);
  const [selectedBenefit, setSelectedBenefit] = useState(null);
  const theme = useTheme();

  const handleClickOpen = (benefit) => {
    setSelectedBenefit(benefit);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedBenefit(null);
  };

  return (
    <div>
      <Grid container spacing={3}>
        {benefits.map((benefit, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card elevation={0} onClick={() => handleClickOpen(benefit)}>
              <CardContent>
                <Typography
                  variant="h2"
                  component="div"
                  sx={{ fontWeight: "bold", mb: 2, fontSize: "50px" }}
                  textAlign={"right"}
                >
                  {benefit.number}
                </Typography>
                <Typography
                  variant="title"
                  component="div"
                  sx={{ fontWeight: "bold", mb: 1 }}
                >
                  {benefit.title}
                </Typography>
                <Typography variant="h4" color="textSecondary">
                  {benefit.description}
                </Typography>
                <Box sx={{ textAlign: "right", mt: 2 }}>
                  <Button
                    sx={{
                      backgroundColor: "transparent",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                    aria-label="Navigate outwards" // Added aria-label here
                    endIcon={
                      <Box
                        sx={{
                          backgroundColor: theme.palette.primary.light,
                          borderRadius: 1,
                          border: "1px solid #FFEACC",
                        }}
                      >
                        <ArrowOutwardIcon
                          sx={{ color: theme.palette.secondary.main }}
                        />
                      </Box>
                    }
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>{selectedBenefit?.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{selectedBenefit?.description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BenefitCards;
