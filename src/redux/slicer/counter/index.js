import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// initial state
const initialState = {
  value: 0,
};

// reducer contain functions
export const counterSlicer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } =
  counterSlicer.actions;

export default counterSlicer.reducer;

// export const incrementAsync = createAsyncThunk(
//   'counter/incremnetAsync',
//   async (amount) => {
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     return amount;
//   }
// );
