import { configureStore } from '@reduxjs/toolkit';
import { counterSlicer } from './slicer/counter';

// reducers: has responsibilty to handle events
export const store = configureStore({
  reducer: {
    counter: counterSlicer,
  },
});
