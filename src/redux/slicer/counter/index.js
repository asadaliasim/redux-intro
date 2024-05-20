import { createSlice } from '@reduxjs/toolkit';

const counterSlicer = createSlice({
  initialState: 0,
  name: 'counter',
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});
// reducer contains logic which is actions so we exported them
export const { increment, decrement } = counterSlicer.actions;
export default counterSlicer.reducer;
