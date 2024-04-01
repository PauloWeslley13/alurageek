interface IFactory<T> {
  add(data: T): T
}

export type { IFactory }
