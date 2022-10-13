import { IuserSignup } from "./userType";

function CreateUser({ userId, userPwd, userEmail, userPhone, onRegist, onChange } : IuserSignup)
{
    return(
        <div>
            <input
                type="text"
                name="userId"
                placeholder="아이디"
                value={userId}
                onChange={onChange}
            />
            <input
                type="password"
                name="userPwd"
                placeholder="비밀번호"
                value={userPwd}
                onChange={onChange}
            />
            <input
                type="password"
                name="userPwdCheck"
                placeholder="비밀번호 확인"
            />
            <input
                type="text"
                name="userEmail"
                placeholder="이메일"
                value={userEmail}
                onChange={onChange}
            />
            <input
                type="text"
                name="userPhone"
                placeholder="전화번호"
                value={userPhone}
                onChange={onChange}
            />
            <button onClick={onRegist}>다음</button>
        </div>
    );
}

export default CreateUser;