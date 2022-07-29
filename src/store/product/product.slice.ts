import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "./product.types";

const initialState: IProduct[] = [];

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      return action.payload;
    },
  },
});

export const productsReducer = productsSlice.reducer;
export const productsActions = productsSlice.actions;
