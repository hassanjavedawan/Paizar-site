/** @format */

import { configureStore } from "@reduxjs/toolkit";
import cartSlice  from "./reducers";

export const store = configureStore({
  reducer: {cart:cartSlice},
});
