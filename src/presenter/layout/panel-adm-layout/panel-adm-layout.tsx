import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { darken } from '@mui/material'
import { usePanelAdm } from './hook/usePanelAdm'

function PanelAdmLayout() {
  const { value, handleChangeMenu, a11yTabProps } = usePanelAdm()
  const { pathname } = useLocation()

  if (pathname === '/panel-adm') {
    return <Navigate to="/panel-adm/products" />
  }

  return (
    <>
      <Box
        sx={{
          bgcolor: (theme) => darken(theme.palette.background.default, 0.1),
          maxWidth: (theme) => theme.breakpoints.values.lg,
          margin: '0 auto',
          borderRadius: 2.5,
        }}
      >
        <Tabs centered value={value} onChange={handleChangeMenu}>
          <Tab
            label="Produtos"
            {...a11yTabProps('products')}
            sx={{ fontSize: (theme) => theme.typography.pxToRem(20) }}
          />
          <Tab
            label="Categoria"
            {...a11yTabProps('categories')}
            sx={{ fontSize: (theme) => theme.typography.pxToRem(20) }}
          />
        </Tabs>
      </Box>

      <Box
        sx={{
          maxWidth: (theme) => theme.breakpoints.values.lg,
          margin: '0 auto',
          px: 10,
          pt: 5,
        }}
      >
        <Outlet />
      </Box>
    </>
  )
}

export default PanelAdmLayout
