// Importing Necessary Functions and Files
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Configuring the Store
const store = configureStore({
  reducer: {
    cart: cartReducer, // Manages the state slice related to the shopping cart
  },
});

// Exporting the Store
export default store;
