import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IuserInfo, IuserState } from '../sliceTypes'
import {  } from './userManagementSlice'

interface initialStateType {
  user: IuserInfo;
  userState: IuserState
}

const initialState: initialStateType = {
  user: {
    uId: "",
    uEmail: "",
    uPwd: "",
    uName: "",
    uBirth: new Date('2000-01-01'), // YYYYMMDD
  },
  userState: {
    active: false,
    stat: "LOADING"
  }
}

export const signinSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    signupRequest: (state, action: PayloadAction<IuserInfo>) => {
      state.user = action.payload // 다른 데이터와의 중복 체크해야함
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