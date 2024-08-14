import { IFirestoreCreate } from "@/infra/services/firebase";
import { ICategoryCreate } from "@/domain/contracts";

type FirestoreType = IFirestoreCreate<
  ICategoryCreate.Params,
  ICategoryCreate.Model
>;

interface CategoryCreateDependencies {
  firestore: FirestoreType;
}

export class RemoteCategoryCreate implements ICategoryCreate {
  private firestore: FirestoreType;

  constructor(protected dependencies: CategoryCreateDependencies) {
    this.firestore = dependencies.firestore;
  }

  async createCategory(
    params: ICategoryCreate.Params,
  ): Promise<ICategoryCreate.Model> {
    const response = await this.firestore.create(params);

    return response.data;
  }
}
