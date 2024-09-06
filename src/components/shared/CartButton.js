import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux"; 
import theme from "@/styles/theme";

const CartButton = ({ handleCartPage }) => {
  const cartLength = useSelector((state) => state.cart.items.length);

  return (
    <IconButton onClick={handleCartPage}>
      <Badge badgeContent={cartLength} color="secondary">
        <ShoppingCartIcon sx={{ color: theme.palette.secondary.main }} />
      </Badge>
    </IconButton>
  );
};

export default CartButton;
