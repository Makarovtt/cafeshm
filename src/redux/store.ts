import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/basket-slice";
import clientReducer from "./features/info-client-slice";

export const store = configureStore({
  reducer: {
    basketReducer,
    clientReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
