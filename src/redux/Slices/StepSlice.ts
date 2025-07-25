
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StepState {
  step: number;
}

const initialState: StepState = {
  step: 1,
};

const stepSlice = createSlice({
  name: "propertyStep",
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    nextStep: (state) => {
      state.step += 1;
    },
    previousStep: (state) => {
      if (state.step > 0) {
        state.step -= 1;
      }
    },
  },
});

export const { setStep, nextStep, previousStep } = stepSlice.actions;
export default stepSlice.reducer;
