import { ChangeEventHandler, MouseEventHandler } from "react";

export interface IuserSignup{
    userId : string;
    userPwd : string;
    userEmail : string;
    userPhone : string;
    onRegist?: MouseEventHandler<HTMLButtonElement>;
    onChange?: ChangeEventHandler<HTMLInputElement>;
};

export interface IuserInfo{
    readonly userCode: string;
    userId: string;
    userPwd: string;
    userEmail: string; 
    userPhone: string;
    userState?: IuserStat;
};

export enum active{
    Online,
    Offline
}

export interface IuserStat{
    nickname?: string;
    profile?: string;
    active: active;
};