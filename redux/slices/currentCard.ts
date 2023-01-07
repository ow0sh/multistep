import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialProps {
  currentCard: string;
}

const currentCardSlice = createSlice({
  name: 'currentCard',
  initialState: {
    currentCard: '',
  } as InitialProps,
  reducers: {
    setCurrentCard: (state, action: PayloadAction<InitialProps>) => {
      state.currentCard = action.payload.currentCard;
    },
  },
});

export const { setCurrentCard } = currentCardSlice.actions;
export default currentCardSlice.reducer;
