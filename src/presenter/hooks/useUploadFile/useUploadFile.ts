import { ChangeEvent } from "react";
import { getDownloadURL } from "firebase/storage";
import { useAppDispatch, useAppSelector } from "@/main/store/hook/useRedux";
import {
  uploadError,
  uploadFile,
  uploadProgress,
  uploadSuccess,
} from "@/main/store/ducks/upload";
import { makeRemoteFirebaseUpload } from "@/main/factories/data";
import { toasts } from "@/presenter/components/ui";

export function useUploadFile() {
  const { file } = useAppSelector((state) => state.upload);
  const dispatch = useAppDispatch();

  function handleChangeFile(e: ChangeEvent<HTMLInputElement>) {
    dispatch(uploadFile({ fileUrl: e.target.files }));
  }

  function handleStorageFirebase() {
    const upload = makeRemoteFirebaseUpload();

    if (!file) {
      return toasts.error({ title: "Selecione uma arquivo" });
    }

    const uploadTask = upload.uploadFile({ file });

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        dispatch(uploadProgress(progress));
      },
      (err) => {
        dispatch(uploadError({ error: err.message }));
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((URLFile) => {
          dispatch(uploadSuccess({ fileURL: URLFile }));
          dispatch(uploadProgress(null));
        });
      },
    );
  }

  return { handleStorageFirebase, handleChangeFile };
}
