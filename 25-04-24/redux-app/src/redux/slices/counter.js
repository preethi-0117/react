import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    list: [],
  },
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    incrementByAmount: (state, action) => {
      state.value = state.value + action.payload;
    },
    decrementByAmount: (state, action) => {
        state.value = state.value - action.payload 
    }
    
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
