import theme from "@/styles/theme";
import Button from "@mui/material/Button";

const CustomButton = ({ title, color, backgroundColor, ...props }) => (
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
      "&:hover": {
        backgroundColor: "transparent",
        color: "black",
        border: `1px solid ${theme.palette.secondary.main}`,
      },
    }}
  >
    {title}
  </Button>
);

export default CustomButton;
