import {
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import DividerWithText from "./DividerWithText";
import CustomButton from "./CustomButton";
import theme from "@/styles/theme";
import Image from "next/image";

const TestimonialsCard = ({ testimonial }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ mt: 4, backgroundColor: "white", p: 2, borderRadius: 2 }}>
        <Typography sx={{ mb: 3, minHeight: "100px" }}>
          {testimonial.text}
        </Typography>
        <DividerWithText />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Image
              src={testimonial.image}
              alt="personImage"
              width={50}
              height={50}
            />
            <Typography sx={{ fontWeight: "bold" }}>
              {testimonial.name}
            </Typography>
          </Box>
          <CustomButton
            title={"Read Full Story"}
            backgroundColor={theme.palette.primary.light}
            onClick={handleClickOpen}
          />
        </Box>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{testimonial.name}</DialogTitle>
        <DialogContent>
          <Typography>{testimonial.text}</Typography>
          {/* Add more content as needed */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TestimonialsCard;
