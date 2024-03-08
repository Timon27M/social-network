import { AppDispatch } from "./store";
import userApi from "../utils/api";
import { ILoginUser } from "../utils/types";
import { userSlice } from "./reducers/UserSlice";

export const loginUser = (objLogin: ILoginUser) => (dispatch: AppDispatch) => {
    dispatch(userSlice.actions.getUserRequest())
    
    userApi.loginUser(objLogin)
    .then((res) => {
        dispatch(userSlice.actions.getUserSuccess(res))
    })
    .catch((err) => {
        dispatch(userSlice.actions.getUserFailed(err))
    })
}