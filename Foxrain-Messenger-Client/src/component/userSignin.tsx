import { ChangeEvent, useState } from "react"
import { Link } from "react-router-dom"
import { useAppDispatch } from "../app/hooks"
import { IuserInfo } from "../features/sliceTypes"
//import { userSignin, userSignout } from "../features/user/userManagementSlice"
import { userSignin } from "../features/user/signinSlice"

import '../style/signinPage.css';

function UserSignin() {
    const dispatch = useAppDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailHandler = function (e: ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value)
    }
    const passwordHandler = function (e: ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value)
    }

    const userData: IuserInfo = {
        uEmail: email,
        uPwd: password
    }

    const signinFunc = () => {
        if(email === "") {
            alert("이메일을 입력해주세요.")
            return
        }
        else if(password === ""){
            alert("비밀번호를 입력해주세요.")
            return
        }
        dispatch(userSignin(userData))
    }

    return (
        <div className="userBox">
            <div>
                <input
                    type="text"
                    placeholder="Email Addr"
                    value={email}
                    onChange={emailHandler}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={passwordHandler}
                />
                <button onClick={signinFunc}>Sign in</button>
            </div>
            <div>
                계정이 없으신가요?<Link to={"/signup"}>가입하기</Link>
            </div>
        </div>
    )
}

export default UserSignin
