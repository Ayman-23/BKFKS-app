import { configureStore } from '@reduxjs/toolkit';
import classesReducer from './slices/classesSlices';
import videoReducer from "./slices/videoSlice";

export const store = configureStore({
  reducer: {
    classes: classesReducer,
    videos: videoReducer
  },
});
