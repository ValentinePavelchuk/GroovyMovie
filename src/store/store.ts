import {
  Action,
  configureStore,
  PreloadedState,
  Store,
  ThunkAction,
} from "@reduxjs/toolkit";
import { useMemo } from "react";
import { createWrapper } from "next-redux-wrapper";
import { productApi } from "./product/product.api";
import { cartReducer } from "./cart/cart.slice";
import { usersApi } from "./users/users.api";
import { kinoApi } from "./kino/kino.api";
import { productsReducer } from "./product/product.slice";
import { kinoReducer } from "./kino/kino.slice";

export const makeStore = (preloadedState = {}) =>
  configureStore({
    reducer: {
      [productApi.reducerPath]: productApi.reducer,
      [kinoApi.reducerPath]: kinoApi.reducer,
      cart: cartReducer,
      products: productsReducer,
      kino: kinoReducer,
      [usersApi.reducerPath]: usersApi.reducer,
    },
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productApi.middleware, kinoApi.middleware),
  });

let store: AppStore;

export const initializeStore = (preloadedState: PreloadedState<AppState>) => {
  let initialState = store ?? makeStore(preloadedState);

  if (preloadedState && store) {
    initialState = makeStore({ ...store.getState(), ...preloadedState });
  }

  if (typeof window === "undefined") return initialState;

  if (!store) store = initialState;

  return initialState;
};

export function useStore(initialState: AppState) {
  return useMemo(() => initializeStore(initialState), [initialState]);
}

export const wrapper = createWrapper<Store>(makeStore, { debug: true });

export type AppDispatch = ReturnType<AppStore["dispatch"]>;
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
