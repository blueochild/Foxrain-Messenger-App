import React, { Dispatch, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { IuserInfo } from '../sliceTypes'
import { signupRequest, signupSuccess, signupError } from './signupSlice'
import { userAdded, userDeleted, userManageReq } from './userManagementSlice';
import UserList from './userList'

interface SignupParam {
  user: IuserInfo;
}

function Signup() {
  // The `state` arg is correctly typed as `RootState` already
  const user = useAppSelector((state) => state.signup.user)
  const dispatch = useAppDispatch()

  // omit rendering logic

  const [Email, setEmail] = useState("");
  const [Pwd, setPwd] = useState("");
  const [Name, setEName] = useState("");
  const [Birth, setBirth] = useState<Date>(new Date('00000000'));

  const onEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const onPwdHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value)
  }
  const onNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEName(e.target.value)
  }
  const onBirthHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value)
    setBirth(newDate)
  }

  const userData: IuserInfo = {
    uId: "0",
    uEmail: Email,
    uPwd: Pwd,
    uName: Name,
    uBirth: Birth
  }

  return (
    <div>
      <UserList/>
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
        value={Email}
        onChange={onEmailHandler}
      />
      <input
        type="text"
        name="userPwd"
        placeholder="비밀번호"
        value={Pwd}
        onChange={onPwdHandler}
      />
      <input
        type="text"
        name="userName"
        placeholder="이름"
        value={Name}
        onChange={onNameHandler}
      />
      <input
        type="date"
        name="userBirth"
        placeholder="생년월일"
        value='2022-10-18'
        onChange={onBirthHandler}
      />
      <button onClick={() => { dispatch(userAdded(userData)) }}>다음</button>
      <button onClick={() => { dispatch(userDeleted(userData)) }}>삭제</button>
    </div>
  );
}

export default Signup