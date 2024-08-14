import { IStorage } from "@/infra/cache";

export class LocalStorageAdapter
  // eslint-disable-next-line prettier/prettier
  implements IStorage.Get, IStorage.Set, IStorage.Delete
{
  set(key: string, value: object): void {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.removeItem(key);
    }
  }

  get(key: string) {
    const value = localStorage.getItem(key);
    if (value) return JSON.parse(value);
  }

  delete(key: string) {
    return localStorage.removeItem(key);
  }
}
