import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { productApi } from "./product/product.api";
import { cartReducer } from "./cart/cart.slice";
import { usersApi } from "./users/users.api";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    cart: cartReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
