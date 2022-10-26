import { ChangeEvent, useState } from 'react'
import { useAppDispatch } from '../app/hooks'
import { IuserInfo } from '../features/sliceTypes'
import { userDeleted } from '../features/user/userManagementSlice';

function UserDelete() {
  const dispatch = useAppDispatch()

  const [Email, setEmail] = useState("");
  const [Pwd, setPwd] = useState("");
  const [Name, setEName] = useState("");
  const [Birth, setBirth] = useState<Date>(new Date('00000000'));

  const onNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEName(e.target.value)
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
        name="userName"
        placeholder="이름"
        value={Name}
        onChange={onNameHandler}
      />
      <button onClick={() => { dispatch(userDeleted(userData)) }}>삭제</button>
    </div>
  );
}

export default UserDelete