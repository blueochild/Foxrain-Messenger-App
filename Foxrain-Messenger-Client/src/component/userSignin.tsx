import { IuserLogin } from "./userType";


function UserSignin({ loginUser, onChange, onLogin, onLogout }: IuserLogin) {
    if (loginUser.isLogin == true) {
        return (
            <div>
                <b>userName</b>
                &nbsp;
                <span>userEmail</span>
                <button onClick={onLogout}>LogOut</button>
            </div>
        );
    }
    else {
        return (
            <div className="loginBox">
                <div className="loginUser">
                    <input
                        name="LoginId"
                        type="text"
                        placeholder="Id"
                        onChange={onChange}
                    />
                    <input
                        name="LoginPwd"
                        type="password"
                        placeholder="Password"
                        onChange={onChange}
                    />
                    <button onClick={onLogin}>Login</button>
                </div>
                <a href="">register</a>
            </div>
        );
    }
}

export default UserSignin;