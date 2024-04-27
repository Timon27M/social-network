export interface IUser {
    name: string;
    email: string;
    phone: string;
    avatar: string;
}

export interface IUserAvatar {
    avatar: string;
}

export interface IToken {
    token: string
}

export interface ILoginUserResponse extends IUser, IToken {}

export interface IRegisterUserResponse extends IUser {
    id: string;
    token: string
}

export interface IRegisterUserRequest { 
    name: string;
    email: string;
    phone: number | null;
    password: string;
}

export interface ILoginUser {
    email: string;
    password: string;
}

export interface IUserRequestInRedux {
    payload: IUser
}