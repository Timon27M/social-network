export interface IUser {
    name: string;
    email: string;
    phone: number | null;
    avatar: string;
}

export interface IToken {
    token: string
}

export interface IRegisterUserResponse extends IUser {
    id: string;
    token: string
}

export interface IRegisterUserRequest { 
    name: string;
    email: string;
    phone: number;
    password: string;
}