import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UsersProps } from '@/components/types/users-props'
import { UserCredential, signOut } from 'firebase/auth'
import { auth } from '@/config/firebase'
import { dataUserLocalStorageKey } from '@/constants/local-storage-key'

type UserType = {
  user: UsersProps
  isLogged: boolean
}

const INITIAL_STATE: UserType = {
  user: {} as UsersProps,
  isLogged: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setUserAuth: (state, { payload }: PayloadAction<UserCredential>) => {
      return {
        user: {
          id: payload.user.uid,
          email: payload.user.email!,
          username: payload.user.displayName!,
          photoUrl: payload.user.photoURL!,
          password: state.user.password,
        },
        isLogged: true,
      }
    },
    logout: (state) => {
      state.isLogged = false
      const handleLogout = async () => {
        await signOut(auth)
          .then(() => {
            localStorage.removeItem(dataUserLocalStorageKey)
          })
          .catch((err) => {
            console.log(err)
          })
      }
      handleLogout()
    },
    getUserLogged: (_, { payload }: PayloadAction<UserType>) => {
      return payload
    },
  },
})

export const { setUserAuth, logout, getUserLogged } = userSlice.actions
export const userReducer = userSlice.reducer
