import { styled } from '@mui/material'
import { STYLES } from '@/styles'

export const Footer = styled('footer')(
  ({ theme }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${theme.spacing(1)};

  margin-top: ${theme.spacing(12)};
  padding: ${theme.spacing(5)};
  background: ${STYLES.COLORS.zinc[100]};
`,
)
