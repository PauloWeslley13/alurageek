import { IUserLogged } from '@/data/usecases'
import { makeRemoteUserLogged } from '@/main/factories/usecases'

export const userServices = {
  userAuthenticated: async ({ userId }: IUserLogged.Params) => {
    const user = makeRemoteUserLogged()
    return await user.getUserLogged({ userId })
  },
}
