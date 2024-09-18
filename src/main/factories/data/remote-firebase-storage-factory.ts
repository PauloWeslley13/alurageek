import { makeRemoteDatabase } from '@/main/factories/data'
import { RemoteFirebaseUpload } from '@/infra/services/firebase'

export const makeRemoteFirebaseUpload = () => {
  return new RemoteFirebaseUpload({ database: makeRemoteDatabase() })
}
