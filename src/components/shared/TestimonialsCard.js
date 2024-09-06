import {
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
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
        <Typography
          variant="h4"
          color="textSecondary"
          sx={{ mb: 3, minHeight: "100px" }}
        >
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

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        sx={{ p: 2 }}
      >
        <DialogTitle
          sx={{
            fontWeight: "bold",
            fontSize: "1.25rem",
            color: "text.primary",
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          {testimonial.name}
        </DialogTitle>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 2,
            mb: 2,
          }}
        >
          <Image
            src={testimonial.image}
            alt="personImage"
            width={80}
            height={80}
            style={{ borderRadius: "50%" }}
          />
        </Box>
        <DialogContent>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", lineHeight: 1.5 }}
          >
            {testimonial.text}
          </Typography>
        </DialogContent>
        <DialogActions>



          <CustomButton 
          title="Close"
          onClick={handleClose}
          color="white"
          backgroundColor={theme.palette.secondary.main}

          />
        
            
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TestimonialsCard;
