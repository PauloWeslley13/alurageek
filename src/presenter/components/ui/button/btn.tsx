import { ComponentProps } from 'react'
import * as S from './btn-styled'

type BtnProps = ComponentProps<typeof S.BtnStyled> & { label: string }

export const Btn = ({ label, ...rest }: BtnProps) => {
  return (
    <S.BtnStyled {...rest} variant="text">
      {label}
    </S.BtnStyled>
  )
}
