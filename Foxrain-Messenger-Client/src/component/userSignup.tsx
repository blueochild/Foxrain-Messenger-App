import { ChangeEvent, useState } from 'react'
import { useAppDispatch } from '../app/hooks'
import { IuserInfo } from '../features/sliceTypes'
import { userSignup, userSignupPost } from '../features/user/userManagementSlice';

function UserSignup() {
  const dispatch = useAppDispatch()

  const [Email, setEmail] = useState("");
  const [Pwd, setPwd] = useState("");
  const [Name, setEName] = useState("");
  const [Birth, setBirth] = useState<Date>(new Date('00000000'));

  const onEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const onPwdHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value)
  }
  const onNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEName(e.target.value)
  }
  const onBirthHandler = (e: ChangeEvent<HTMLInputElement>) => {
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
      <button onClick={() => { dispatch(userSignupPost(userData)) }}>다음</button>
    </div>
  );
}

export default UserSignup