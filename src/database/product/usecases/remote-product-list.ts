import { getDocs, orderBy, query, where } from "firebase/firestore";
import { COLLECTIONS, IFirebase } from "@/infra/services/firebase";
import { IProductList } from "@/domain/contracts";

interface RemoteProductListDependencies {
  database: IFirebase;
}

export class RemoteProductList implements IProductList {
  private products: IProductList.Model[] = [];
  private database: IFirebase;

  constructor(protected dependencies: RemoteProductListDependencies) {
    this.database = dependencies.database;
  }

  async getProductList(): Promise<RemoteProductList.Model[]> {
    const productsQuery = query(
      this.database.collection(COLLECTIONS.PRODUCTS),
      where("name", "!=", true),
      orderBy("name", "asc"),
    );
    const productListQuery = await getDocs(productsQuery);

    productListQuery.forEach((doc) => {
      const data = { ...doc.data(), id: doc.id } as RemoteProductList.Model;
      this.products.push(data);
    });

    return this.products;
  }
}

export namespace RemoteProductList {
  export type Model = IProductList.Model;
}
