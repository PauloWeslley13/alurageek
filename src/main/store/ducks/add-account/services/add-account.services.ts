import { IAddAccount, IUserCreate } from '@/data/usecases'
import {
  makeRemoteAddAccount,
  makeRemoteUserCreate,
} from '@/main/factories/usecases'

export const addAccountService = {
  createUser: async (params: IUserCreate.Params) => {
    const user = makeRemoteUserCreate()
    return await user.create(params)
  },
  addAccount: async (params: IAddAccount.Params) => {
    const user = makeRemoteAddAccount()
    return await user.register(params)
  },
}
