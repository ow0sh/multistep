import { createSlice } from '@reduxjs/toolkit';

interface initialProps {
  isYearly: boolean;
}

const isYearlySlice = createSlice({
  name: 'isYearly',
  initialState: {
    isYearly: false,
  } as initialProps,
  reducers: {
    setIsYearly: (state) => {
      state.isYearly = !state.isYearly;
    },
  },
});

export const { setIsYearly } = isYearlySlice.actions;

export default isYearlySlice.reducer;
