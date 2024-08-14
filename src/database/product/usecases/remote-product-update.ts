import { IFirestoreUpdate } from "@/infra/services/firebase";
import { IProductUpdate } from "@/domain/contracts";

type FirestoreType = IFirestoreUpdate<
  IProductUpdate.Params,
  IProductUpdate.Model
>;

interface RemoteProductCreateDependencies {
  firestore: FirestoreType;
}

export class RemoteProductUpdate implements IProductUpdate {
  private firestore: FirestoreType;

  constructor(protected dependencies: RemoteProductCreateDependencies) {
    this.firestore = dependencies.firestore;
  }

  async updatedProduct(
    params: IProductUpdate.Params,
  ): Promise<IProductUpdate.Model> {
    const response = await this.firestore.updated(params);

    return response.data;
  }
}
