import React, { useRef, useState } from 'react';
import { IuserInfo, IuserStat } from './component/userType';
import UserSignup from './component/userSignup';
import UserSignin from './component/userSignin';
import UserList from './component/userList'
import Signup from './features/signup/signup'

/* page CSS */
import './style/App.css';

const defaultUserStat : IuserStat = {
  nickname : "guest",
  profile: "test Profile!",
  active : false
}

function App() {

  const [loginUser, setLoginUser] = useState({
    isLogin: false,
    isUserCode: ''
  })
  
  const [LoginInputs, setLoginInputs] = useState({
    LoginId: '',
    LoginPwd: ''
  });
  const { LoginId, LoginPwd } = LoginInputs;

  const [registInputs, setregistInputs] = useState({
    userId: '',
    userPwd: '', 
    userEmail: '', 
    userPhone: ''
  });
  const { userId, userPwd, userEmail, userPhone } = registInputs;

  const registOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setregistInputs({
      ...registInputs,
      [name] : value
    })
  }

  const loginOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginInputs({
      ...LoginInputs,
      [name] : value
    })
  }

  const [users, setUsers] = useState<IuserInfo[]>([
    {  
      userCode: '1',
      userId: 'tester',
      userPwd: 'test123', 
      userEmail: 'test@test.com', 
      userPhone: '01011112222',
      userState : {
        ...defaultUserStat,
        nickname: "guesttest"
      }
    },
    {  
      userCode: '2',
      userId: 'starty',
      userPwd: 'star111', 
      userEmail: 'star111@starty.com', 
      userPhone: '01033334444',
      userState : defaultUserStat
    }
  ]);

  const nextId = useRef(3);
  const onRegist = () => {
    const user = {
      userCode: String(nextId.current),
      userId,
      userPwd,
      userEmail,
      userPhone,
      userState : {
        ...defaultUserStat,
        nickname: "guest"+String(nextId.current)
      }
    };

    setUsers(users.concat(user));

    setregistInputs({
      userId: '',
      userPwd: '', 
      userEmail: '', 
      userPhone: ''
    });
    nextId.current += 1;

    console.log(user);
  }

  const onRemove = (Tuser:string) => {
    setUsers(users.filter(user => user.userId !== Tuser))
  }

  // 유저 이름 클릭시 Online(green), Offline(black) active의 상태 설정
  const onToggle = (userId: string) => {
    setUsers(users.map(
      user => user.userId === userId ? 
      {...user, userState: { ...user.userState, active: !user.userState.active} } : user
    ))
  }

  const onLogout = () => {
    setLoginUser({
      isLogin: false,
      isUserCode: ''
    });
    setLoginInputs({
      LoginId: '',
      LoginPwd: ''
    });
  }
  const onLogin = () => {

    if(!LoginId) { alert('ID를 입력하세요.'); return; };
    if(!LoginPwd) { alert('Password를 입력하세요.'); return; };

    // (), {} 의 차이를 알고 사용하자 ( 조건에서 {} 사용시, 반환값 에러 나타남 )
    const islogin = users.filter(user => (
      user.userId === LoginId && 
      user.userPwd === LoginPwd
    ))

    if(islogin.length === 1){
      setLoginUser({
        isLogin: true,
        isUserCode: islogin[0].userCode
      });
    }
    else{
      alert("ID가 존재하지 않거나 비밀번호가 틀렸습니다.");
    }

  };

  return (
    <div className="App">
      <UserSignin 
        loginUser={loginUser}
        onChange={loginOnChange}
        onLogin={onLogin}
        onLogout={onLogout}
      />
      <UserSignup
        userId={userId}
        userPwd={userPwd}
        userEmail={userEmail}
        userPhone={userPhone}
        onRegist={onRegist}
        onChange={registOnChange}
      />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <Signup></Signup>
    </div>
  );
}

export default App;
