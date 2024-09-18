import { createListenerMiddleware } from '@reduxjs/toolkit'
import { getDownloadURL } from 'firebase/storage'
import {
  loadUploadFile,
  uploadError,
  uploadProgress,
  uploadSuccess,
} from '@/main/store/ducks/upload'
import { makeRemoteFirebaseUpload } from '@/main/factories/data'

export const listenerUpload = createListenerMiddleware()

listenerUpload.startListening({
  actionCreator: loadUploadFile,
  effect: ({ payload }, { dispatch }) => {
    const upload = makeRemoteFirebaseUpload()
    const uploadTask = upload.uploadFile({
      file: payload.file,
      fileURL: payload.fileURL,
    })

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        dispatch(uploadProgress(progress))
      },
      (err) => {
        dispatch(uploadError({ error: err.message }))
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((URLFile) => {
          dispatch(uploadSuccess({ fileURL: URLFile }))
          dispatch(uploadProgress(null))
        })
      },
    )
  },
})
