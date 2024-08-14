import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  removeCurrentUserAdapter,
  setCurrentUserAdapter,
} from "@/main/adapters";
import { AuthStateProps, PayloadParams } from "@/main/store/ducks/auth";

const AUTH_INITIAL_STATE = {
  user: null,
  error: null,
  isLoading: false,
} satisfies AuthStateProps as AuthStateProps;

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: AUTH_INITIAL_STATE,
  reducers: {
    authSuccess: (_, { payload }: PayloadAction<PayloadParams.AuthSuccess>) => {
      setCurrentUserAdapter(payload.user);
      return {
        user: payload.user,
        error: payload.error,
        isLoading: false,
      };
    },
    authPending: (state, { payload }: PayloadAction<boolean>) => {
      return {
        ...state,
        isLoading: payload,
      };
    },
    authFailure: (_, { payload }: PayloadAction<PayloadParams.AuthFailure>) => {
      return {
        user: null,
        error: payload.error,
        isLoading: payload.isLoading,
      };
    },
    logout: (state) => {
      removeCurrentUserAdapter();
      return {
        ...state,
        user: null,
        error: null,
      };
    },
  },
});

export const { authSuccess, authPending, authFailure, logout } =
  authenticationSlice.actions;
export const authenticationReducer = authenticationSlice.reducer;
