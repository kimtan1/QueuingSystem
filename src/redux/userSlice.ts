import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { userInfo } from './types';


const initialState: userInfo = {

  userName: "Kimtan1",
  fullName: "Lê Kim Tân",
  phoneNumber: "0999999999",
  email: "kimtan1@gmail.com",
  password: "meomeo",
  role: 0,
  avatar: "https://cdn.pixabay.com/photo/2019/12/16/07/20/indian-police-4698728_960_720.png"
}

  export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      login: (state, actions) => {
        state.email = actions.payload.email
      },
      logout: (state) => {
        state.email = ""
      }
    },
  });
  
  // To able to use reducers we need to export them.
  export const { login, logout } = userSlice.actions;
  
  export default userSlice.reducer;