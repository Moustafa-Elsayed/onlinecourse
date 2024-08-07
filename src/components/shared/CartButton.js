import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux"; // Assuming you're using Redux for state management
import theme from "@/styles/theme";

const CartButton = ({ handleCartPage }) => {
  // Assuming you have a cart state in Redux
  const cartLength = useSelector((state) => state.cart.items.length);
  console.log("cartLength", cartLength);

  return (
    <IconButton onClick={handleCartPage}>
      <Badge badgeContent={cartLength} color="secondary">
        <ShoppingCartIcon sx={{ color: theme.palette.secondary.main }} />
      </Badge>
    </IconButton>
  );
};

export default CartButton;
