export namespace Upload {
  export type StateType = {
    fileURL: string
    file: File | null
    prevFileURL: string
    progress: number | null
    error: string | null
  }

  export type ParamsSuccess = Pick<StateType, 'fileURL'>

  export type ParamsError = Pick<StateType, 'error'>

  export type FileParams = {
    fileUrl: FileList | null
  }
}
