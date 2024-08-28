import React, { useState } from "react";
import Button from "@mui/material/Button";
import CircularProgress from '@mui/material/CircularProgress';
import Image from "next/image";

const CustomButton = ({
  fontWeight,
  border,
  title,
  color,
  backgroundColor,
  imageUrl,
  imageAlt,
  borderRadius,
  imagePosition = "start",
  width,
  endIcon,
  onClick,
  startIcon,
  fontSize,
  loading = false, // Optional loading prop
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (event) => {
    if (onClick) {
      if (loading) {
        setIsLoading(true);
        await onClick(event); // Ensure onClick is awaited if it's a promise
        setTimeout(() => setIsLoading(false), 1200); // Simulate 1-second delay
      } else {
        await onClick(event);
      }
    }
  };

  const icon = imageUrl ? (
    <Image src={imageUrl} alt={imageAlt} width={24} height={24} />
  ) : imagePosition === "end" ? (
    endIcon
  ) : (
    startIcon
  );

  return (
    <Button
      {...props}
      sx={{
        backgroundColor: backgroundColor,
        color: color,
        padding: "8px 16px",
        borderRadius: borderRadius || "8px",
        textTransform: "capitalize",
        border: border,
        transition: "background-color 0.3s, color 0.3s, border 0.3s",
        width: width,
        fontWeight: fontWeight,
        fontSize: { xs: "11px", md: "16px" },
        position: "relative",
        "&:hover": {
          backgroundColor: backgroundColor,
        },
        "&:disabled": {
          cursor: "not-allowed",
          backgroundColor: backgroundColor,
          color: color,
        },
      }}
      startIcon={imagePosition === "start" ? (isLoading ? null : icon) : null}
      endIcon={imagePosition === "end" ? (isLoading ? null : icon) : null}
      onClick={handleClick}
      disabled={isLoading} // Disable the button while loading
    >
      {isLoading ? <CircularProgress size={24} color="inherit" /> : title}
    </Button>
  );
};

export default CustomButton;
