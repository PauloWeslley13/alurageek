import { FirebaseError } from 'firebase/app'
import { RemoteErrorMessage } from '@/data/errors'

export function makeRemoteErrorMessage(
  params: string | undefined,
): FirebaseError | null {
  const error = new RemoteErrorMessage()
  return error.getErrorMessage(params)
}
