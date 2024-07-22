import Button from "@mui/material/Button";
import Image from "next/image";

const CustomButton = ({ title, color, backgroundColor, imageUrl, imageAlt, imagePosition = "start",width, ...props }) => {
  const icon = imageUrl ? (
    <Image
      src={imageUrl}
      alt={imageAlt}
      width={24} 
      height={24}
    />
  ) : null;

  return (
    <Button
      {...props}
      sx={{
        backgroundColor: backgroundColor,
        color: color,
        padding: "8px 16px",
        borderRadius: "8px",
        textTransform: "capitalize",
        border: "1px solid transparent",
        transition: "background-color 0.3s, color 0.3s, border 0.3s",
        width:width,
        "&:hover": {
          backgroundColor: backgroundColor,
        },
      }}
      startIcon={imageUrl && imagePosition === "start" ? icon : null}
      endIcon={imageUrl && imagePosition === "end" ? icon : null}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
