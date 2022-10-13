import React, { ChangeEventHandler, MouseEventHandler, useRef, useState } from 'react';
import './style/App.css';
import CreateUser from './component/userSignup';
import UserList from './component/userList'
import { active, IuserInfo, IuserStat } from './component/userType';

const defaultUserStat : IuserStat = {
  nickname : "guest",
  profile: "test Profile!",
  active : active.Offline
}

function App() {
  
  const [inputs, setInputs] = useState({
    userId: '',
    userPwd: '', 
    userEmail: '', 
    userPhone: ''
  });
  const { userId, userPwd, userEmail, userPhone } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
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

    setInputs({
      userId: '',
      userPwd: '', 
      userEmail: '', 
      userPhone: ''
    });
    nextId.current += 1;

    console.log(user);
  }

  function onToggle(){
    
  }

  return (
    <div className="App">
      <CreateUser
        userId={userId}
        userPwd={userPwd}
        userEmail={userEmail}
        userPhone={userPhone}
        onRegist={onRegist}
        onChange={onChange}
      />
      <UserList users={users}/>
    </div>
  );
}

export default App;
