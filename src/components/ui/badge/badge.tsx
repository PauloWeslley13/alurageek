import { ComponentProps, ReactNode } from 'react'
import { styled } from '@mui/system'
import { Badge as BaseBadge, badgeClasses } from '@mui/base/Badge'
import { deepPurple, grey, indigo, teal } from '@mui/material/colors'
import { COLORS } from '@/styles'

const BadgeContent = styled('span')(
  ({ theme }) => `
  padding: 6px;
  border-radius: 8px;
  background: ${theme.palette.mode === 'dark' ? indigo[500] : COLORS.violet[50]};
  border: 1px solid ${theme.palette.mode === 'dark' ? indigo[200] : COLORS.violet[300]};
  color: ${theme.palette.mode === 'dark' ? indigo[50] : COLORS.violet[600]};
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  transition: all 150ms ease;

  &:hover {
    background: ${theme.palette.mode === 'dark' ? indigo[700] : COLORS.violet[400]};
    border-color: ${theme.palette.mode === 'dark' ? indigo[100] : COLORS.violet[500]};
  }

  &:active {
    background: ${theme.palette.mode === 'dark' ? indigo[100] : COLORS.violet[500]};
    border-color: ${theme.palette.mode === 'dark' ? indigo[500] : COLORS.violet[100]};
    color: ${theme.palette.mode === 'dark' ? indigo[500] : COLORS.violet[100]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? deepPurple[200] : deepPurple[300]};
    outline: none;
  }
`,
)

const Badge = styled(BaseBadge)(
  () => `
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-variant: tabular-nums;
  list-style: none;
  font-family: 'IBM Plex Sans', sans-serif;
  position: relative;
  display: inline-block;
  line-height: 1;

  & .${badgeClasses.badge} {
    z-index: auto;
    position: absolute;
    top: 0;
    right: 0;
    min-width: 22px;
    height: 22px;
    padding: 0 6px;
    color: #fff;
    font-weight: 600;
    font-size: 12px;
    line-height: 22px;
    white-space: nowrap;
    text-align: center;
    border-radius: 12px;
    background: ${teal.A700};
    box-shadow: 0px 4px 8px ${grey[500]};
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
  }
  `,
)

type ShoppingBadgeProps = ComponentProps<typeof Badge> & { children: ReactNode }

export const ShoppingBadge = ({ children, ...rest }: ShoppingBadgeProps) => {
  return (
    <Badge {...rest}>
      <BadgeContent>{children}</BadgeContent>
    </Badge>
  )
}
