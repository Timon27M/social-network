import {
  IRegisterUserResponse,
  IRegisterUserRequest,
  IToken,
  IUser,
  ILoginUser,
  ILoginUserResponse,
} from "./types";

class UserApi {
  private _baseUrl: string;

  constructor(url: string) {
    this._baseUrl = url;
  }

  _checkStatus<T>(res: Response): Promise<T> {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  loginUser(userObj: ILoginUser): Promise<ILoginUserResponse> {
    return fetch(this._baseUrl + "/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userObj.email,
        password: userObj.password,
      }),
    }).then((res) => this._checkStatus<ILoginUserResponse>(res));
  }

  registerUser(obj: IRegisterUserRequest): Promise<IToken> {
    return fetch(this._baseUrl + "/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: obj.email,
        password: obj.password,
        name: obj.name,
        phone: obj.phone,
      }),
    }).then((res) => this._checkStatus<IToken>(res));
  }

  getUser(): Promise<IUser> {
    return fetch(this._baseUrl + "/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }).then((res) => this._checkStatus<IUser>(res));
  }

  updateUser(obj: IUser): Promise<IUser> {
    return fetch(this._baseUrl + "/user", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        email: obj.email,
        avatar: obj.avatar,
        name: obj.name,
        phone: obj.phone,
      }),
    }).then((res) => this._checkStatus<IUser>(res));
  }
}

const userApi = new UserApi("http://localhost:4000");

export default userApi;
