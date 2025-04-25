import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./slices/accountSlice";

export const store = configureStore({
  reducer: {
    auth: accountSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;