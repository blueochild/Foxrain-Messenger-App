import React, { useState, useEffect } from 'react';

function Login() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

    const onClickLogin = () => {
        if(!inputId) alert('Id를 입력해주세요')
        if(!inputPw) alert('Pw를 입력해주세요')
        
        console.log('click login')
        console.log(inputId, inputPw)
        
    }
    const handleInputId = (e: any) => {
        setInputId(e.target.value)
    }
    const handleInputPw = (e: any) => {
        setInputPw(e.target.value)
    }

    return (
        <div>
            <h2>Login</h2>
            <div id='userid'>
                <label>Id</label>
                <input type='text' name='inputId' placeholder='user Id' onChange={handleInputId} />
            </div>
            <div id='userpwd'>
                <label>Password</label>
                <input type='password' name='inputPw' placeholder='user Password' onChange={handleInputPw} />
            </div>
            <a href='forgotPassword'>비밀번호를 잊으셨나요?</a>
            <div>
                <button type='button' onClick={onClickLogin}>로그인</button>
            </div>
        </div>
    );
}

export default Login;