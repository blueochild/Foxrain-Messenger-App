import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IuserInfo, IuserState } from '../sliceTypes'

interface initialStateType {
    info: IuserInfo;
    userActivity: IuserState
}

const initialUserActivity: IuserState = {
    active: false,
    stat: "SIGNUP"
}

const initialUserState: initialStateType = {
    info: {
        uId: "0",
        uEmail: "",
        uPwd: "",
        uName: "",
        uBirth: new Date('2000-01-01'), // YYYYMMDD
    },
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
            userAdded(action.payload)
        },
        userAdded: (state, action: PayloadAction<IuserInfo>) => {
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
    },
})

// Action creators are generated for each case reducer function
export const { userManageReq, userAdded, userDeleted } = usersSlice.actions

export default usersSlice.reducer