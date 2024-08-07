import { showToast } from "@/components/shared/showToast";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      if (!item._id) {
        console.error("Item must have an _id");
        showToast("Item must have an _id", "error");
        return;
      }
      const existingItem = state.items.find((i) => i._id === item._id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
        showToast(`${item.title} quantity updated`, "success");
      } else {
        state.items.push(item);
        showToast(`${item.title} added to cart`, "success");
      }
    },
    removeItem: (state, action) => {
      const _id = action.payload;
      const item = state.items.find((item) => item._id === _id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          showToast(`${item.title} quantity decreased`, "info");
        } else {
          state.items = state.items.filter((item) => item._id !== _id);
          showToast(`${item.title} removed from cart`, "success");
        }
      } else {
        showToast("Item not found", "error");
      }
    },
    updateQuantity: (state, action) => {
      const { _id, quantity } = action.payload;
      const item = state.items.find((i) => i._id === _id);
      if (item) {
        item.quantity = quantity;
        showToast(`${item.title} quantity updated`, "success");
      } else {
        showToast("Item not found", "error");
      }
    },
    clearCart: (state) => {
      state.items = [];
      showToast("Cart cleared", "success");
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
