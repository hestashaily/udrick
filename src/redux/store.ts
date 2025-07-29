import { configureStore } from "@reduxjs/toolkit";

import stepReducer from "../redux/Slices/StepSlice";
import selectedListingReducer from "../redux/Slices/selectedListingSlice";


export const store = configureStore({
  reducer: {
    step: stepReducer,
    selectedListing: selectedListingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
