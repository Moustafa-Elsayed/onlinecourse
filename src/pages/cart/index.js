import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, List, ListItem, Button } from "@mui/material";
import { removeItem } from "@/redux/slices/cartSlice";

const Index = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="h6">Your cart is empty</Typography>
      ) : (
        <List>
          {cartItems.map((item) => (
            <ListItem
              key={item._id}
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Box>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2">
                  Quantity: {item.quantity}
                </Typography>
                <Typography variant="body2">Price: ${item.price}</Typography>
              </Box>
              <Button
                variant="outlined"
                color="error"
                onClick={() => handleRemove(item._id)}
              >
                Remove
              </Button>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default Index;
