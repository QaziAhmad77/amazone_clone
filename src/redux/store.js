import { configureStore } from '@reduxjs/toolkit';
import amazoneReducer from './amazonSlice';

export const store = configureStore({
  reducer: {
    amazoneReducer,
  },
});
