import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialProps {
  price: number;
}

const priceSlice = createSlice({
  name: 'price',
  initialState: {
    price: 0,
  } as InitialProps,
  reducers: {
    addPrice: (state, action: PayloadAction<InitialProps>) => {
      state.price = action.payload.price;
    },
  },
});

export const { addPrice } = priceSlice.actions;
export default priceSlice.reducer;
