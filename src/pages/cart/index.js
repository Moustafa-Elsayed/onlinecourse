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
import { loadStripe } from "@stripe/stripe-js";
import {
  removeItem,
  incrementQuantity,
  decrementQuantity,
} from "@/redux/slices/cartSlice";
import Image from "next/image";
import theme from "@/styles/theme";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const formatPrice = (price) => {
  const numericPrice = Number(price);
  if (isNaN(numericPrice)) {
    console.error("Invalid price value:", price);
    return "0.00"; 
  }
  return numericPrice.toFixed(2);
};

const calculateTotalPrice = (items) => {
  const total = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return formatPrice(total);
};


const Index = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = calculateTotalPrice(cartItems);

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartItems }),
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <Box sx={{ padding: 2, maxWidth: "1200px", margin: "auto" }}>
      <Typography variant="h2" gutterBottom align="center" mb={5}>
        Your Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="h3" align="center" mb={5}>
          Your cart is empty
        </Typography>
      ) : (
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              order: { xs: 1, md: 2 }, 
            }}
          >
            <Box sx={{ padding: 3, boxShadow: 3, borderRadius: 4 }}>
              <Typography variant="h5" align="right" fontWeight="bold">
                Total: ${formatPrice(totalPrice)}
              </Typography>
              <Button
                variant="contained"
                onClick={handleCheckout}
                sx={{
                  mt: 3,
                  borderRadius: 2,
                  textTransform: "none",
                  backgroundColor:theme.palette.secondary.main
                }}
                fullWidth
              >
                Proceed to Checkout
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              order: { xs: 2, md: 1 }, 
            }}
          >
            {cartItems.map((item) => (
              <Card key={item._id} sx={{ mb: 2, borderRadius: 4, boxShadow: 3 }}>
                <Grid container alignItems="center">
                  <Grid item xs={12} md={4}>
                    <Box
                      sx={{
                        p: 2,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
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
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        mb={2}
                        mt={2}
                      >
                        Unit Price: ${formatPrice(item.price)}
                      </Typography>
                      <Divider />
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mt: 3,
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <IconButton
                            onClick={() =>
                              dispatch(decrementQuantity(item._id))
                            }
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
                            onClick={() =>
                              dispatch(incrementQuantity(item._id))
                            }
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
                          sx={{
                            borderRadius: 2,
                            textTransform: "none",
                          }}
                        >
                          Remove
                        </Button>
                      </Box>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            ))}
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Index;
