
// signUp need Data
export interface IuserInfo{
    uId: string;
    uEmail: string;
    uPwd: string;
    uName: string;
    uBirth: Date;
}

export interface SigninState{
    userEmail: string;
    userPwd: string;
}