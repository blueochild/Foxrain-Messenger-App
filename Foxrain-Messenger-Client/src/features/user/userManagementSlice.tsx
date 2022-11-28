import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { initialStateType, IuserInfo, IuserState } from '../sliceTypes'
import axios from 'axios';

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

export const userSignupPost = createAsyncThunk(
    'component/userSignup',
    async (data: IuserInfo, thunkAPI) => {

        const uId = "1";
        const uEmail = data.uEmail;
        const uPwd = data.uPwd;
        const uName = data.uName;
        const uBirth = data.uBirth;

        const response = await axios.post("http://localhost:4000/users", {
            id: 3, // 꼭 필요한듯?
            uId: uId,
            uEmail: uEmail,
            uPwd: uPwd,
            uName: uName,
            uBirth: uBirth,
            isSignin: {
                isSignin: false,
                signinUserToken: `${uName}TOKEN${uName}`,
                signinState: "IDLE"
            }
        })
        /*const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );*/
        userSignup(data);
        console.log(response);
        return response.data
    }
)

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
            state.push(item);
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
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(userSignupPost.pending, (state, action) => {
                alert("signup Loading...");
            })
            .addCase(userSignupPost.fulfilled, (state, action) => {
                alert("signup Success!!");
            })
            .addCase(userSignupPost.rejected, (state, action) => {
                alert("Error : "+action.error);
            })
    }
})

// Action creators are generated for each case reducer function
export const { userManageReq, userSignup, userDeleted, userSignin, userSignout } = usersSlice.actions

export default usersSlice.reducer