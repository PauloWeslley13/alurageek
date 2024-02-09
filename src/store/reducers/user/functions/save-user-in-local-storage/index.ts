import { dataUserLocalStorageKey } from '@/constants/local-storage-key'

type SaveUserStorageProps = {
  uid: string
  username: string
}

export const saveUserInLocalStorage = (data: SaveUserStorageProps) => {
  localStorage.setItem(dataUserLocalStorageKey, JSON.stringify(data))
}
