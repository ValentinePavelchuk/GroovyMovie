import { createSlice } from "@reduxjs/toolkit";

const initialState: number[] = [];

export const kinoSlice = createSlice({
  name: "kino",
  initialState,
  reducers: {
    addKino: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const kinoReducer = kinoSlice.reducer;
export const kinoActions = kinoSlice.actions;
