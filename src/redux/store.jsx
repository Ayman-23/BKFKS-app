import { configureStore } from '@reduxjs/toolkit';
import classesReducer from './slices/classesSlices';

export const store = configureStore({
  reducer: {
    classes: classesReducer,
  },
});
