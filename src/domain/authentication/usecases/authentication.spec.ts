import { AuthenticationSpy, mockAuthentication } from '../test'
import { Authentication } from './authentication'
import { IAuthentication } from '../interfaces'

type SutTypes = {
  sut: Authentication
  authenticationSpy: AuthenticationSpy<IAuthentication.Model>
}

const makeSut = (): SutTypes => {
  const authenticationSpy = new AuthenticationSpy<IAuthentication.Model>()
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
