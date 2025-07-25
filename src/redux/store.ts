import { configureStore } from "@reduxjs/toolkit";

import stepReducer from "../redux/Slices/StepSlice";

export const store = configureStore({
  reducer: {
    step: stepReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
