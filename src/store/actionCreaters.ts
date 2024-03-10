import { AppDispatch } from "./store";
import userApi from "../utils/api";
import { ILoginUser, IRegisterUserRequest } from "../utils/types";
import { userSlice } from "./reducers/UserSlice";
import { NavigateFunction } from "react-router-dom";

export const loginUser =
  (objLogin: ILoginUser, navigate: NavigateFunction) =>
  (dispatch: AppDispatch) => {
    dispatch(userSlice.actions.getUserRequest());

    userApi
      .loginUser(objLogin)
      .then((res) => {
        dispatch(userSlice.actions.getUserSuccess(res));
        sessionStorage.setItem("token", res.token);
        navigate("/main", { replace: true });
        console.log(res);
      })
      .catch((err) => {
        dispatch(userSlice.actions.getUserFailed(err));
      });
  };

export const registerUser =
  (objRegister: IRegisterUserRequest, navigate: NavigateFunction) =>
  (dispatch: AppDispatch) => {
    userApi
      .registerUser(objRegister)
      .then((res) => {
        navigate("/login", { replace: true });
      })
      .catch((err) => {
        dispatch(userSlice.actions.getUserFailed(err));
      });
  };

export const getUser = () => (dispatch: AppDispatch) => {
  dispatch(userSlice.actions.getUserRequest());

  userApi.getUser()
  .then((res) => {
    dispatch(userSlice.actions.getUserSuccess(res));
  })
  .catch((err) => {
    dispatch(userSlice.actions.getUserFailed(err))
  })
};
