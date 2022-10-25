
// signUp need Data
export interface IuserInfo{
    uId?: string;
    uEmail: string;
    uPwd: string;
    uName?: string;
    uBirth?: Date;
}

export interface SigninState{
    userEmail: string;
    userPwd: string;
}

export interface IuserState{
    active: "ONLINE" | "OFFLINE" | "BUSY";
    stat: "LOADING" | "SIGNIN" | "SIGNUP" | "SUCCESS" | "ERROR";
}

export interface initialStateType {
    info: IuserInfo;
    userActivity: IuserState
  }