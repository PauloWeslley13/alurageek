import { ChangeEvent } from 'react'
import { useAppDispatch, useAppSelector } from '@/main/store/hook/useRedux'
import { loadUploadFile, uploadFile } from '@/main/store/ducks/upload'
import { toasts } from '@/presenter/components/ui'

export function useUploadFile() {
  const { file } = useAppSelector((state) => state.upload)
  const dispatch = useAppDispatch()

  function handleChangeFile(e: ChangeEvent<HTMLInputElement>) {
    dispatch(uploadFile({ fileUrl: e.target.files }))
  }

  function handleStorageFirebase() {
    if (!file) {
      return toasts.error({ title: 'Selecione uma arquivo' })
    }

    dispatch(loadUploadFile({ file, fileURL: `/product/${file.name}` }))
  }

  return { handleStorageFirebase, handleChangeFile }
}
