import { IStorage, LocalStorageAdapter } from "@/infra/cache";

type LocalStorageAdapterType = IStorage.Get & IStorage.Set & IStorage.Delete;

export const makeLocalStorageAdapter = (): LocalStorageAdapterType => {
  return new LocalStorageAdapter();
};
