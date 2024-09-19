import { FC, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Stack, useMediaQuery } from '@mui/material'
import { LogoTipo } from '@/presenter/components/ui'
import { Nav, SearchField } from './components'
import * as S from './styles'

export const NavBar: FC = () => {
  const [scrollPosition, setScrollPosition] = useState<boolean>(false)
  const markerRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const hasMaxScreen = useMediaQuery('(max-width:899px)')

  useEffect(() => {
    const marker = markerRef.current

    if (!marker) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrollPosition(!entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    console.log(observer)

    observer.observe(marker)

    return () => {
      if (marker) observer.unobserve(marker)
    }
  }, [])

  // const handleScroll = () => {
  //   const position = window.scrollY
  //   setScrollPosition(position)
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  return (
    <S.NavBarContainer scroll={scrollPosition}>
      <S.Nav>
        <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 2.5 }}>
          <LogoTipo
            onClick={() => navigate('/home')}
            style={{ cursor: 'pointer' }}
          />

          {!hasMaxScreen && <SearchField />}
        </Stack>

        <Nav />
      </S.Nav>
    </S.NavBarContainer>
  )
}
