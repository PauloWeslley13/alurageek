import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UserType, UsersProps } from '@/components/types/users-props'

const INITIAL_STATE: UserType = {
  user: {} as UsersProps,
  isLogged: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setUserAuth: (_, { payload }: PayloadAction<UsersProps>) => {
      return {
        user: {
          id: payload.id,
          email: payload.email,
          username: payload.username,
          photoUrl: payload.photoUrl,
          password: payload.password,
        },
        isLogged: true,
      }
    },
    logout: (state) => {
      state.isLogged = false
    },
    getUserLogged: (_, { payload }: PayloadAction<UserType>) => {
      return payload
    },
  },
})

export const { setUserAuth, logout, getUserLogged } = userSlice.actions
export const userReducer = userSlice.reducer
