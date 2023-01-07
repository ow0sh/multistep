import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialProps {
  addons: string[];
}

const addonSlice = createSlice({
  name: 'addons',
  initialState: {
    addons: [],
  } as InitialProps,
  reducers: {
    addAddOn: (state, action: PayloadAction<string>) => {
      state.addons.push(action.payload);
    },
    removeAddOn: (state, action: PayloadAction<string>) => {
      state.addons.splice(state.addons.indexOf(action.payload), 1);
    },
  },
});

export const { addAddOn, removeAddOn } = addonSlice.actions;
export default addonSlice.reducer;
