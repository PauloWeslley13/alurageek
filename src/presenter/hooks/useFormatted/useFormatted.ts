import { Format } from '@/validation/format'

const makeFormat = (): Format => new Format()

export function useFormatted() {
  const formatted = makeFormat()

  return { formatted }
}
