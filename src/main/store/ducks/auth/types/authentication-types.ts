import { AccountModel } from '@/data/models'
import { ReducerStateType } from '@/main/store/types/reducer-type'

export namespace AuthenticationType {
  export type AuthSuccess = {
    user: AccountModel
  }

  export type AuthFailure = {
    error: string
    isLoading: boolean
  }
}

export type AuthStateProps = ReducerStateType & {
  user: AccountModel | null
}
