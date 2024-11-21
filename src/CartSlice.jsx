import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Adds an item to the cart or updates its quantity if it already exists
    addItem: (state, action) => {
      const plant = action.payload;

      // Check if the item is already in the cart
      const existingItem = state.items.find((item) => item.name === plant.name);

      if (existingItem) {
        // If item exists, increase the quantity
        existingItem.quantity += 1;
      } else {
        // If not, add the item with quantity 1
        state.items.push({ ...plant, quantity: 1 });
      }
    },

    // Removes an item from the cart by name
    removeItem: (state, action) => {
      const plantName = action.payload;

      // Filter out the item with the matching name
      state.items = state.items.filter((item) => item.name !== plantName);
    },

    // Updates the quantity of an item in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      // Find the item in the cart
      const item = state.items.find((item) => item.name === name);

      if (item) {
        // Update its quantity if found
        item.quantity = quantity;
      }
    },
  },
});

// Export the action creators
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer as the default
export default CartSlice.reducer;
