import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { isSignin, IuserInfo } from "../sliceTypes";

export const userSignin = createAsyncThunk(
    'component/userSignin',
    async (data: IuserInfo, thunkAPI) => {
        // const uid = "0"
        const response = await axios.get(`http://localhost:4000/users?uEmail=${data.uEmail}&uPwd=${data.uPwd}`)
        /*const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );*/
        console.log(response);
        if(response.data){
            alert("데이터 존재!");
        }
        return response.data
    }
)

const initialState: isSignin = {
    isSignin: false,
    signinUserToken: "",
    signinState: "IDLE"
}

export const signinSlice = createSlice({
    name: 'signin',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(userSignin.pending, (state, action) => {
                state.isSignin = false
                state.signinState = "LOADING"
            })
            .addCase(userSignin.fulfilled, (state, action) => {
                state.isSignin = true
                state.signinState = "SIGNIN"
                window.location.href = "/userlist"
            })
            .addCase(userSignin.rejected, (state, action) => {
                state.isSignin = false;
                state.signinState = "IDLE"
                state.signinRejectReason = action.error
            })
    }
})

export default signinSlice.reducer