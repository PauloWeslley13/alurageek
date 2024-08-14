import { doc, getDoc } from "firebase/firestore";
import {
  COLLECTIONS,
  IFirebase,
  IFirebaseAuthToken,
} from "@/infra/services/firebase";
import { UserRepoFactory } from "@/database/user";
import { IUserLogged } from "@/domain/contracts";

interface RemoteUserLoggedDependencies {
  database: IFirebase;
  authToken: IFirebaseAuthToken;
}

export class RemoteUserLogged implements IUserLogged {
  private userFactory = new UserRepoFactory.Create();
  private database: IFirebase;
  private authToken: IFirebaseAuthToken;

  constructor(protected dependencies: RemoteUserLoggedDependencies) {
    this.database = dependencies.database;
    this.authToken = dependencies.authToken;
  }

  async getUserLogged(params: IUserLogged.Params): Promise<IUserLogged.Model> {
    const userDoc = await getDoc(
      doc(this.database.getDB(), COLLECTIONS.USERS, params.userId),
    );
    const data = userDoc.data() as IUserLogged.Model;
    const token = await this.authToken.getFirebaseAuthToken();
    const { user } = this.userFactory.add({ ...data, accessToken: token });

    return user;
  }
}
