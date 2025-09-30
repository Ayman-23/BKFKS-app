import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  classes: [
    { id: 1, name: 'Beginner Karate', time: 'Mon & Wed 6-7 PM' },
    { id: 2, name: 'Advanced Karate', time: 'Tue & Thu 7-8 PM' },
  ],
};

export const classesSlice = createSlice({
  name: 'classes',
  initialState,
  reducers: {
    addClass: (state, action) => {
      state.classes.push(action.payload);
    },
  },
});

export const { addClass } = classesSlice.actions;
export default classesSlice.reducer;
