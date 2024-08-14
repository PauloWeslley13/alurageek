import { IFirestoreUpdate } from "@/infra/services/firebase";
import { ICategoryUpdate } from "@/domain/contracts";

type FirestoreType = IFirestoreUpdate<
  ICategoryUpdate.Params,
  ICategoryUpdate.Model
>;

interface CategoryCreateDependencies {
  firestore: FirestoreType;
}

export class RemoteCategoryUpdate implements ICategoryUpdate {
  private firestore: FirestoreType;

  constructor(protected dependencies: CategoryCreateDependencies) {
    this.firestore = dependencies.firestore;
  }

  async updatedCategory(
    params: ICategoryUpdate.Params,
  ): Promise<ICategoryUpdate.Model> {
    const response = await this.firestore.updated(params);

    return response.data;
  }
}
