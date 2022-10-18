import { Dispatch, useState } from 'react'
import { isErrored } from 'stream'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { IuserInfo } from '../sliceTypes'
import { signupRequest, signupSuccess, signupError } from './signupSlice'

interface SignupParam{
    user: IuserInfo;
}

function Signup() {
  // The `state` arg is correctly typed as `RootState` already
  const user = useAppSelector((state) => state.signup.user)
  const dispatch = useAppDispatch()

  // omit rendering logic

  const userTest: IuserInfo = {
    uId: "123",
    uEmail: "test@test.com",
    uPwd: "1234",
    uName: "seungcheol Park",
    uBirth: new Date("2003/03/14"), // YYYYMMDD
  }

  const [userT, setUsertT] = useState({
    ...user
  })

  return(
    <div>
        <div>
            <p>userName : {user.uEmail}</p>
            <p>userPwd : {user.uPwd}</p>
            <p>userName : {user.uName}</p>
            <p>userBirth : {user.uBirth.toString()}</p>
        </div>

        <input
            type="text"
            name="userEmail"
            placeholder="이메일"
        />
        <input
            type="text"
            name="userPwd"
            placeholder="비밀번호"
        />
        <input
            type="text"
            name="userName"
            placeholder="이름"
        />
        <input
            type="date"
            name="userBirth"
            placeholder="이메일"
        />
        <button onClick={()=>{dispatch(signupRequest(userTest))}}>다음</button>
        <button onClick={()=>{dispatch(signupError(new Error))}}>에러</button>
    </div>
  );
}

export default Signup