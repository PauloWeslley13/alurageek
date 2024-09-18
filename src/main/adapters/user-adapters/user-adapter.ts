import { AccountModel } from '@/data/models'
import { makeLocalStorageAdapter } from '@/main/factories/cache'

export const setCurrentUserAdapter = (user: AccountModel): void => {
  makeLocalStorageAdapter().set('user-alurageek', user)
}

export const getCurrentUserAdapter = (): AccountModel => {
  return makeLocalStorageAdapter().get('user-alurageek')
}

export const removeCurrentUserAdapter = (): void => {
  return makeLocalStorageAdapter().delete('user-alurageek')
}
