import { IFirestoreCreate } from "@/infra/services/firebase";
import { IProductCreate } from "@/domain/contracts";

type FirestoreType = IFirestoreCreate<
  IProductCreate.Params,
  IProductCreate.Model
>;

interface RemoteProductCreateDependencies {
  firestore: FirestoreType;
}

export class RemoteProductCreate implements IProductCreate {
  private firestore: FirestoreType;

  constructor(protected dependencies: RemoteProductCreateDependencies) {
    this.firestore = dependencies.firestore;
  }

  async createProduct(
    params: IProductCreate.Params,
  ): Promise<IProductCreate.Model> {
    const response = await this.firestore.create(params);

    return response.data;
  }
}
