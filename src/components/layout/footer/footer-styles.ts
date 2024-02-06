import { STYLES } from '@/styles'
import { styled } from '@mui/system'

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
