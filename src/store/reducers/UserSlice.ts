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
    increment(state, action: PayloadAction<string>) {
        state.error = action.payload 
    }
  }
});

export default userSlice.reducer;
