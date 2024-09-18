import { User } from 'firebase/auth'
import { AccountModel } from '@/data/models'

export function authAdapter(
  user: User | undefined,
  token: string | undefined,
): AccountModel {
  if (!user || !token) {
    return {} as AccountModel
  }

  return {
    id: user.uid,
    email: user.email || '',
    username: user.displayName || '',
    photoUrl: user.photoURL || '',
    accessToken: token,
  }
}
