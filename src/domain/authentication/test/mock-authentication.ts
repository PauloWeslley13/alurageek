import { faker } from '@faker-js/faker'
import { IAuthentication } from '@/domain/authentication'

export const mockAuthentication = (): IAuthentication.Params => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
})
