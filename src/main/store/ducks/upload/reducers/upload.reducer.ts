import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Upload } from '@/main/store/ducks/upload'

const INITIAL_UPLOAD_STATE = {
  fileURL: '',
  file: null,
  prevFileURL: '',
  progress: null,
  error: null,
} satisfies Upload.StateType as Upload.StateType

const uploadSlice = createSlice({
  name: 'upload',
  initialState: INITIAL_UPLOAD_STATE,
  reducers: {
    uploadFile: (state, { payload }: PayloadAction<Upload.FileParams>) => {
      if (payload.fileUrl) {
        const fileSelected = payload.fileUrl[0]

        if (
          fileSelected.type === 'image/jpeg' ||
          fileSelected.type === 'image/png'
        ) {
          return {
            ...state,
            file: fileSelected,
            prevFileURL: URL.createObjectURL(fileSelected),
          }
        } else {
          return { ...state, file: null }
        }
      }

      return state
    },
    uploadSuccess: (
      state,
      { payload }: PayloadAction<Upload.ParamsSuccess>,
    ) => {
      return {
        ...state,
        fileURL: payload.fileURL,
        prevFileURL: '',
      }
    },
    uploadProgress: (state, { payload }: PayloadAction<number | null>) => {
      state.progress = payload
    },
    uploadError: (state, { payload }: PayloadAction<Upload.ParamsError>) => {
      state.error = payload.error
    },
  },
})

export const { uploadSuccess, uploadProgress, uploadError, uploadFile } =
  uploadSlice.actions
export const themeReducer = uploadSlice.reducer
