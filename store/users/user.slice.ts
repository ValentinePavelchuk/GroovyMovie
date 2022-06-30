import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "./user.types";

const initialState: IUser[] = [];

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      state.push(action.payload);
    },
    removeUser: (state, action: PayloadAction<{ id: number }>) => {
      return state.filter((p) => p.id !== action.payload.id);
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
