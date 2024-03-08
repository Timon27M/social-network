import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../utils/types";

interface IUserState {
  user: IUser;
  isLoading: boolean;
  error: string;
}

const initialState: IUserState = {
  user: {
    email: "",
    name: "",
    phone: null,
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
        phone: null,
        avatar: "",
      };
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
