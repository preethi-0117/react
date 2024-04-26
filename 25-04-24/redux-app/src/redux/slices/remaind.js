import { createSlice } from "@reduxjs/toolkit";


export const remaindSlice = createSlice({
  name: "remaind",
  initialState: {
    amount: 100,
    list: [],
  },
  reducers: {
    incrementAmt: (state) => {
      state.amount = state.amount + 1;
    },
    decrementAmt: (state) => {
      state.amount = state.amount - 1;
    },
    incrementAmount: (state, action) => {
      state.amount = state.amount + action.payload;
    },
    decrementAmount: (state, action) => {
        state.amount = state.amount - action.payload 
    }
    
  },
});

export const { incrementAmt, decrementAmt, incrementAmount, decrementAmount } = remaindSlice.actions;

export default remaindSlice.reducer;
