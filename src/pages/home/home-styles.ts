import { styled } from '@mui/material/styles'

export const Card = styled('div')(({ theme }) => ({
  background: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  minWidth: 300,
}))

export const CardTitle = styled('div')(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontFamily: theme.typography.fontFamily,
}))

export const CardSubTitle = styled('div')(({ theme }) => ({
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  fontSize: 34,
  fontWeight: 'medium',
}))

export const CardIcon = styled('div')(({ theme }) => ({
  color: theme.palette.secondary.dark,
  fontSize: 16,
  verticalAlign: 'sub',
}))

export const CardBody = styled('div')(({ theme }) => ({
  color: theme.palette.secondary.dark,
  display: 'inline',
  fontFamily: theme.typography.fontFamily,
  fontWeight: 'medium',
  mx: 0.5,
}))

export const CardContent = styled('div')(({ theme }) => ({
  color: theme.palette.text.secondary,
  display: 'inline',
  fontSize: 12,
  fontFamily: theme.typography.fontFamily,
}))
