import { Button, Stack } from '@mui/material'
import { CartSideBar } from '@/presenter/components/ui'
import {
  MenuMobile,
  MenuProfile,
  MenuTheme,
} from '@/presenter/components/layout/navbar/components'
import { useNav } from './hook'

export function Nav() {
  const {
    hasMaxScreen,
    hasPathOrLogged,
    hasUserAuthentication,
    handlerNavAuth,
  } = useNav()

  return (
    <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 2.2 }}>
      {!hasMaxScreen && (
        <>
          {!hasPathOrLogged && (
            <Button
              variant="default"
              onClick={handlerNavAuth}
              sx={{
                height: (theme) => theme.spacing(8.995),
                width: (theme) => theme.spacing(20),
              }}
            >
              Login
            </Button>
          )}

          {hasUserAuthentication && <CartSideBar />}

          <MenuTheme />

          {hasUserAuthentication && <MenuProfile />}
        </>
      )}

      <MenuMobile />
    </Stack>
  )
}
