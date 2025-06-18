import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [], 
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.cartItems.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItems.push({ name, image, cost, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.name !== action.payload);
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.cartItems.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

