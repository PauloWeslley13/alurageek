import { call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { toasts } from "@/presenter/components/ui";
import { IUploadFile } from "@/infra/services/firebase";
import { makeRemoteFirebaseUpload } from "@/main/factories/data/remote-firebase-storage-factory";
import {
  loadUploadFile,
  uploadError,
  uploadTaskSuccess,
} from "@/main/store/ducks/upload";

function makeFirebaseStorage(params: IUploadFile.Params): IUploadFile.Model {
  const upload = makeRemoteFirebaseUpload();
  const uploadTask = upload.uploadFile(params);
  return uploadTask;
}

function* loadStorage({ payload }: PayloadAction<IUploadFile.Params>) {
  yield console.log(payload);
  try {
    const uploadTask: IUploadFile.Model = yield call(
      makeFirebaseStorage,
      payload,
    );
    yield put(uploadTaskSuccess(uploadTask));
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      yield put(uploadError({ error: error.message }));
      return toasts.error({ title: error.message });
    }
  }
}

export function* loadUploadFileSaga() {
  yield takeLatest(loadUploadFile, loadStorage);
}
