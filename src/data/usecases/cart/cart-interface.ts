import { ICart } from '@/domain/cart'
import { FirebaseResponse } from '@/infra/services/firebase'

export namespace ICartSaved {
  export type Params = ICart

  export type Model = FirebaseResponse<ICart>
}

export interface ICartSaved {
  cartSaved(params: ICartSaved.Params): Promise<ICartSaved.Model>
}
