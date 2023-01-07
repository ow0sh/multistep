import { configureStore } from '@reduxjs/toolkit';

import priceSlice from './slices/priceSlice';
import userDataSlice from './slices/userDataSlice';
import isYearlySlice from './slices/isYearlySlice';
import currentCardSlice from './slices/currentCard';
import addonSlice from './slices/addonSlice';

const store = configureStore({
  reducer: {
    userData: userDataSlice,
    price: priceSlice,
    isYearly: isYearlySlice,
    currentCard: currentCardSlice,
    addons: addonSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
