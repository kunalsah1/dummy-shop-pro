import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  quantity: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const AddItems = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === AddItems.id
      );

      if (existingItem) {
        existingItem.stock += 1;
      } else {
        state.cartItems.push({ ...AddItems, stock: 1 });
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.stock = cartItem.stock + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.stock = cartItem.stock - 1;
    },
    calculateTotal : (state)=>{
let amount = 0
let total = 0
state.cartItems.forEach((item)=>{
    amount += item.stock
    total += item.stock * item.price
})
state.amount =amount
state.total = total
    }
  },
});


export const { add, clearCart, removeItem, increase,decrease,calculateTotal } = cartSlice.actions;
export default cartSlice.reducer;
