import { UploadTask } from "firebase/storage";

export namespace IUploadFile {
  export type Params = {
    file: File;
  };

  export type Model = UploadTask;
}

export interface IUploadFile {
  uploadFile(params: IUploadFile.Params): IUploadFile.Model;
}
