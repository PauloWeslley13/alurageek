import { UserCredential } from 'firebase/auth'
import { AuthenticationSpy, mockAuthentication } from '../test'
import { Authentication } from './authentication'

type SutTypes = {
  sut: Authentication
  authenticationSpy: AuthenticationSpy<UserCredential>
}

export const makeSut = (): SutTypes => {
  const authenticationSpy = new AuthenticationSpy<UserCredential>()
  const sut = new Authentication()

  return {
    sut,
    authenticationSpy,
  }
}

describe('AuthenticationSpy', () => {
  test('Should call Authentication sign-up correct params', async () => {
    const { sut, authenticationSpy } = makeSut()
    const authenticationParams = mockAuthentication()
    await sut.signUp(authenticationParams)
    expect(authenticationSpy.params).toEqual(authenticationParams)
  })
})
