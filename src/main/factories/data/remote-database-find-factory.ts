import {
  CollectionsType,
  IFirebaseFindById,
  RemoteFirebaseFindById,
} from '@/infra/services/firebase'
import { makeRemoteDatabase } from './remote-database-factory'

export function makeRemoteFirebaseFindById<R>(
  collection: CollectionsType,
): IFirebaseFindById<R> {
  const database = makeRemoteDatabase()
  return new RemoteFirebaseFindById({ database, collection })
}
