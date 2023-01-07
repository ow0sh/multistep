import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface Payload {
  name: string;
  email: string;
  phone: string;
}

interface InitialProps {
  rdname: string;
  rdemail: string;
  rdphone: string;
}

export const userDataSlice = createSlice({
  name: 'user',
  initialState: {
    rdname: '',
    rdemail: '',
    rdphone: '',
  } as InitialProps,
  reducers: {
    addUser: (state, action: PayloadAction<Payload>) => {
      state.rdname = action.payload.name;
      state.rdemail = action.payload.email;
      state.rdphone = action.payload.phone;
    },
  },
});

export const { addUser } = userDataSlice.actions;
export default userDataSlice.reducer;
