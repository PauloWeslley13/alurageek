import { IProductDelete } from "@/domain/contracts";
import { IFirestoreDelete } from "@/infra/services/firebase";

type FirestoreType = IFirestoreDelete<IProductDelete.Params>;

interface RemoteProductCreateDependencies {
  firestore: FirestoreType;
}

export class RemoteProductDelete implements IProductDelete {
  private firestore: FirestoreType;

  constructor(protected dependencies: RemoteProductCreateDependencies) {
    this.firestore = dependencies.firestore;
  }

  async deleteProduct(params: IProductDelete.Params): Promise<void> {
    await this.firestore.delete(params);
  }
}
