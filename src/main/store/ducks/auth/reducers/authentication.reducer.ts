import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthenticationType, AuthStateProps } from '@/main/store/ducks/auth'

const AUTH_INITIAL_STATE = {
  user: null,
  error: null,
  isLoading: false,
} satisfies AuthStateProps as AuthStateProps

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: AUTH_INITIAL_STATE,
  reducers: {
    authSuccess: (
      state,
      { payload }: PayloadAction<AuthenticationType.AuthSuccess>,
    ) => {
      state.user = payload.user
    },
    authPending: (state, { payload }: PayloadAction<boolean>) => {
      return { ...state, isLoading: payload }
    },
    authFailure: (
      _,
      { payload }: PayloadAction<AuthenticationType.AuthFailure>,
    ) => {
      return {
        user: null,
        error: payload.error,
        isLoading: payload.isLoading,
      }
    },
    logout: (state) => {
      return { ...state, user: null, error: null }
    },
  },
})

export const { authSuccess, authPending, authFailure, logout } =
  authenticationSlice.actions
export const authenticationReducer = authenticationSlice.reducer
