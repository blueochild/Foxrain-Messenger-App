import { ChangeEventHandler, MouseEventHandler } from "react";

export interface IuserInfo{
    readonly userCode: string;
    userId: string;
    userPwd: string;
    userEmail: string; 
    userPhone: string;
    userState: IuserStat;
};

export interface IuserStat{
    nickname: string;
    profile: string;
    active: boolean;
};

export interface IuserSignup{
    userId : string;
    userPwd : string;
    userEmail : string;
    userPhone : string;
    onRegist: MouseEventHandler<HTMLButtonElement>;
    onChange: ChangeEventHandler<HTMLInputElement>;
};
export interface IuserLogin{
    loginUser: ImasterData;
    LoginId?: string | "";
    LoginPwd?: string | "";
    onChange: ChangeEventHandler<HTMLInputElement>;
    onLogin: () => void;
    onLogout: () => void;
};

export interface ImasterData{
    isLogin: boolean | false;
    isUserCode?: string;
}