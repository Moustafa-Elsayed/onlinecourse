import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Button,
  Divider,
  Grid,
} from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import {
  removeItem,
  incrementQuantity,
  decrementQuantity,
} from "@/redux/slices/cartSlice";
import Image from "next/image";
const Index = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Box sx={{ padding: 2, maxWidth: "800px", margin: "auto" }}>
      <Typography variant="h4" gutterBottom align="center">
        Your Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="h6" align="center">
          Your cart is empty
        </Typography>
      ) : (
        cartItems.map((item) => (
          <Card key={item._id} sx={{ mb: 2, borderRadius: 4, boxShadow: 3 }}>
            <Grid container alignItems="center">
              <Grid item xs={12} md={4}>
                <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
                  <Image
                    src={item.photos[0]}
                    alt={item.title}
                    layout="responsive"
                    width={200}
                    height={200}
                    style={{ borderRadius: "10px" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={2}>
                    Price: ${item.price}
                  </Typography>
                  <Divider mb={2} />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <IconButton
                        onClick={() => dispatch(decrementQuantity(item._id))}
                        disabled={item.quantity === 1}
                        sx={{
                          bgcolor: "#f5f5f5",
                          borderRadius: 2,
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <Remove />
                      </IconButton>
                      <Typography variant="h6" mx={2}>
                        {item.quantity}
                      </Typography>
                      <IconButton
                        onClick={() => dispatch(incrementQuantity(item._id))}
                        sx={{
                          bgcolor: "#f5f5f5",
                          borderRadius: 2,
                          "&:hover": { bgcolor: "#e0e0e0" },
                        }}
                      >
                        <Add />
                      </IconButton>
                    </Box>
                    <Button
                      variant="contained"
                      color="error"
                      startIcon={<Delete />}
                      onClick={() => dispatch(removeItem(item._id))}
                      sx={{ borderRadius: 2, textTransform: "none" }}
                    >
                      Remove
                    </Button>
                  </Box>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        ))
      )}
    </Box>
  );
};
export default Index;
