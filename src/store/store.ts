import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as dispatch,
  useSelector as selector,
  TypedUseSelectorHook,
} from "react-redux";
import userReducer from "../store/reducers/UserSlice";

const rootReducer = combineReducers({
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type DispatchFunc = () => AppDispatch;

export const useDispatch: DispatchFunc = dispatch;
export const useSelector: TypedUseSelectorHook<RootState> = selector;
