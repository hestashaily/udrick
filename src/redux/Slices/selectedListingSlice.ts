// store/selectedListingSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedListingState {
  selectedOption: "sell" | "rent" | null;
}

const initialState: SelectedListingState = {
  selectedOption: "sell",
};

const selectedListingSlice = createSlice({
  name: "selectedListing",
  initialState,
  reducers: {
    setSelectedOption: (state, action: PayloadAction<"sell" | "rent">) => {
      state.selectedOption = action.payload;
    },
  },
});

export const { setSelectedOption } = selectedListingSlice.actions;
export default selectedListingSlice.reducer;
