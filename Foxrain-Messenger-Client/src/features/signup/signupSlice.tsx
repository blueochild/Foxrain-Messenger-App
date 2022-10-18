import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IuserInfo } from '../sliceTypes'

interface initialStateType {
  user: IuserInfo;
}

const initialState: initialStateType = {
  user: {
    uId: "",
    uEmail: "",
    uPwd: "",
    uName: "",
    uBirth: new Date('00000000'), // YYYYMMDD
  }
}

export const signinSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    signupRequest: (state, action: PayloadAction<IuserInfo>) => {
      state.user = action.payload
    },
    signupSuccess: (state, action: PayloadAction<IuserInfo>) => {
      state.user = action.payload
      alert('Signup success');
    },
    signupError: (state, action: PayloadAction<Error>) => {
      alert('Error : ' + action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { signupRequest, signupSuccess, signupError } = signinSlice.actions

export default signinSlice.reducer