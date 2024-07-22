import React from "react";
import Button from "@mui/material/Button";
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
  startIcon,
  ...props
}) => {
  // Determine the icon based on imageUrl and imagePosition
  const icon = imageUrl ? (
    <Image
      src={imageUrl}
      alt={imageAlt}
      width={24}
      height={24}
    />
  ) : imagePosition === "end" ? endIcon : startIcon;

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
        "&:hover": {
          backgroundColor: backgroundColor,
        },
      }}
      startIcon={imagePosition === "start" ? icon : null}
      endIcon={imagePosition === "end" ? icon : null}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
