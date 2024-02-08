import { dataUserLocalStorageKey } from '@/constants/local-storage-key'

export const setLocalStorage = async (uid: string) => {
  await localStorage.setItem(dataUserLocalStorageKey, JSON.stringify(uid))
}
