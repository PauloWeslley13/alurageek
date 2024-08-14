import { ref, uploadBytesResumable } from "firebase/storage";
import { IFirebase, IUploadFile } from "@/infra/services/firebase";

interface RemoteFirebaseUploadDependencies {
  database: IFirebase;
}

export class RemoteFirebaseUpload implements IUploadFile {
  private database: IFirebase;

  constructor(protected dependencies: RemoteFirebaseUploadDependencies) {
    this.database = dependencies.database;
  }

  uploadFile({ file }: IUploadFile.Params): IUploadFile.Model {
    const fileURLRef = `product/${file.name}`;
    const metadata = { contentType: "image/jpeg" };
    const storageRef = ref(this.database.storage(), fileURLRef);

    return uploadBytesResumable(storageRef, file, metadata);
  }
}
