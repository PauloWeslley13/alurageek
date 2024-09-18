import { ActionCreatorWithPayload, createAction } from '@reduxjs/toolkit'
import { IUploadFile } from '@/infra/services/firebase'

export const loadUploadFile: ActionCreatorWithPayload<
  IUploadFile.Params,
  string
> = createAction<IUploadFile.Params>('upload/loadUploadFile')
