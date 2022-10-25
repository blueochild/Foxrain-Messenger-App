import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { initialStateType, IuserInfo, IuserState } from '../sliceTypes'

const initialUserInfo: IuserInfo = {
    uId: "0",
    uEmail: "",
    uPwd: "",
    uName: "",
    uBirth: new Date('2000-01-01'), // YYYYMMDD
}

const initialUserActivity: IuserState = {
    active: "OFFLINE",
    stat: "SIGNUP"
}

const initialUserState: initialStateType = {
    info: initialUserInfo,
    userActivity: initialUserActivity
}

const initialState = [
    {
        user: initialUserState
    },
]

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        userManageReq: (state, action: PayloadAction<IuserInfo>) => {
            
        },
        userSignup: (state, action: PayloadAction<IuserInfo>) => {
            const nextUid = (Number(state[state.length - 1].user.info.uId) + 1).toString()
            const item = { 
                user: { 
                    info: { ...action.payload, uId: nextUid }, 
                    userActivity: { ...initialUserActivity } 
                } }
            state.push(item)
        },
        userDeleted: (state, action: PayloadAction<IuserInfo>) => {
            return state.filter(e => e.user.info.uName !== action.payload.uName)
        },
        userSignin: (state, action: PayloadAction<IuserInfo>) => {
            state.filter(e => 
                e.user.info.uEmail === action.payload.uEmail && 
                e.user.info.uPwd === action.payload.uPwd 
            )[0].user.userActivity.active = "ONLINE"
        },
        userSignout: (state, action: PayloadAction<IuserInfo>) => {
            state.filter(e => 
                e.user.info.uEmail === action.payload.uEmail && 
                e.user.info.uPwd === action.payload.uPwd 
            )[0].user.userActivity.active = "OFFLINE"
        }
    },
})

// Action creators are generated for each case reducer function
export const { userManageReq, userSignup, userDeleted, userSignin, userSignout } = usersSlice.actions

export default usersSlice.reducer