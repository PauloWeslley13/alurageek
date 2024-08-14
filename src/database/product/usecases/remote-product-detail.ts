import { doc, getDoc } from "firebase/firestore";
import { COLLECTIONS, IFirebase } from "@/infra/services/firebase";
import { IProductDetail } from "@/domain/contracts";

interface RemoteProductDetailDependencies {
  database: IFirebase;
}

export class RemoteProductDetail implements IProductDetail {
  private database: IFirebase;

  constructor(protected dependencies: RemoteProductDetailDependencies) {
    this.database = dependencies.database;
  }

  async getProductDetail(
    params: IProductDetail.Params,
  ): Promise<RemoteProductDetail.Model> {
    const productDoc = await getDoc(
      doc(this.database.getDB(), COLLECTIONS.PRODUCTS, params.productId),
    );

    return productDoc.data() as RemoteProductDetail.Model;
  }
}

export namespace RemoteProductDetail {
  export type Model = IProductDetail.Model;
}
