import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { COLLECTIONS, IFirebase } from "@/infra/services/firebase";
import { UserRepoFactory } from "@/database/user";
import { IUser } from "@/domain/contracts";
import { AccountModel } from "@/domain/models";

interface RemoteUserDependencies {
  database: IFirebase;
}

export class RemoteUser implements IUser {
  private token: string;
  private database: IFirebase;

  constructor(protected dependencies: RemoteUserDependencies) {
    this.database = dependencies.database;
    this.token = "";
  }

  async create({
    data,
    username,
    photoUrl,
  }: IUser.Params): Promise<RemoteUser.Model> {
    this.token = await data.user.getIdToken();

    const user = this.userBuilder({ data, username, photoUrl });

    await updateProfile(data.user, {
      displayName: username,
      photoURL: photoUrl,
    });

    await setDoc(
      doc(this.database.collection(COLLECTIONS.USERS), data.user.uid),
      {
        id: user.id,
        email: user.email,
        username: user.username,
        photoUrl: user.photoUrl,
      },
    );

    return user;
  }

  private userBuilder(params: IUser.Params): AccountModel {
    const { data, username, photoUrl } = params;
    const userFactory = new UserRepoFactory.Create();

    return userFactory.add({
      id: data.user.uid,
      email: data.user.email || "",
      username,
      photoUrl,
      accessToken: this.token,
    }).user;
  }
}

export namespace RemoteUser {
  export type Model = IUser.Model;
}
