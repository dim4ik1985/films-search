import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IChangeState {
  input: string;
  validation: boolean;
}

const initialState = {
  input: "",
  validation: true
} as IChangeState;

export const changeSlice = createSlice({
  name: "change",
  initialState,
  reducers: {
    queryState: (state, action: PayloadAction<string>) => {
      state.input = action.payload;
    },
    validationState: (state, action: PayloadAction<boolean>) => {
      state.validation = action.payload;
    }
  }
});

export const { queryState, validationState } = changeSlice.actions;
export default changeSlice.reducer;
