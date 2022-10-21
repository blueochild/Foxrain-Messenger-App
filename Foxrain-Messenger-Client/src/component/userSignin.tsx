import { ChangeEvent, useState } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { IuserInfo } from "../features/sliceTypes"
import { userSignin, userSignout } from "../features/user/userManagementSlice"

function UserSignin(){
    const user = useAppSelector((state) => state.users)
    const dispatch = useAppDispatch()

    const isLoginCookie = false

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailHandler = function(e : ChangeEvent<HTMLInputElement>){
        setEmail(e.target.value)
    }
    const passwordHandler = function(e : ChangeEvent<HTMLInputElement>){
        setPassword(e.target.value)
    }

    const userDate: IuserInfo = {
        uEmail: email,
        uPwd: password
    }

    return(
        <>
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
                    <button onClick={() => dispatch(userSignin(userDate))}>Sign in</button>
                    <button onClick={() => dispatch(userSignout(userDate))}>Sign out</button>
                </div>
        </>
    )
}

export default UserSignin
