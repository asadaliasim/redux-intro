import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slicer/counter/index';
// reducers: has responsibilty to handle events

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
