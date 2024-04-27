import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUserAvatar } from "../../utils/types";

interface IUserState {
  user: IUser;
  isLoading: boolean;
  error: string;
}

const initialState: IUserState = {
  user: {
    email: "",
    name: "",
    phone: "",
    avatar: "",
  },
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    getUserRequest(state) {
      state.isLoading = true;
    },
    getUserSuccess(state, action: PayloadAction<IUser>) {
      console.log(action)
      state.user = {
        email: action.payload.email,
        name: action.payload.name,
        phone: action.payload.phone,
        avatar: action.payload.avatar,
      };
      state.isLoading = false;
      state.error = "";
    },
    getUserFailed(state, action: PayloadAction<string>) {
      state.user = {
        email: "",
        name: "",
        phone: "0",
        avatar: "",
      };
      state.isLoading = false;
      state.error = action.payload;
    },
    resetState(state) {
      state.user = {
        email: "",
        name: "",
        phone: "0",
        avatar: "",
      };

    },
      getUserUpdateAvatar(state, action: PayloadAction<IUserAvatar>) {
        console.log(action)
        state.user = {
          name: state.user.name,
          email: state.user.email,
          phone: state.user.phone,
          avatar: action.payload.avatar,
        };
      state.isLoading = false;
      state.error = "";
    },
  },
});

export default userSlice.reducer;
