import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
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
import Course1 from "../../../public/Image/course1.png";
import Image from "next/image";
import { MainUrl } from "@/lib/api/constants";

const Index = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Box sx={{ padding: 2, maxWidth: "800px", margin: "auto" }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        Your Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Your cart is empty
        </Typography>
      ) : (
        cartItems.map((item) => (
          <Card
            key={item._id}
            sx={{ marginBottom: 2, borderRadius: 4, boxShadow: 3 }}
          >
            <Grid container alignItems="center">
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    padding: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={`${MainUrl}${item.photos[0]}`}
                    alt={item.title}
                    layout="responsive"
                    width={200}
                    height={200}
                    style={{
                      borderRadius: "10px",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: 2 }}
                  >
                    Price: ${item.price}
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <IconButton
                        onClick={() => dispatch(decrementQuantity(item._id))}
                        disabled={item.quantity === 1}
                        sx={{
                          backgroundColor: "#f5f5f5",
                          borderRadius: 2,
                          "&:hover": { backgroundColor: "#e0e0e0" },
                        }}
                      >
                        <Remove />
                      </IconButton>
                      <Typography variant="h6" sx={{ mx: 2 }}>
                        {item.quantity}
                      </Typography>
                      <IconButton
                        onClick={() => dispatch(incrementQuantity(item._id))}
                        sx={{
                          backgroundColor: "#f5f5f5",
                          borderRadius: 2,
                          "&:hover": { backgroundColor: "#e0e0e0" },
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
