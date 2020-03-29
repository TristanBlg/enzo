import React, { useContext, useEffect } from "react"
import styled, { css } from "styled-components"

import {
  Logo,
  Navigation,
  Container as _Container,
  Hamburger,
} from "../../components"
import { NavContext } from "../../helpers/navContext"
import { HEADER_HEIGHT } from "../"
import { theme } from "../../theme"

export const NAV_HEIGHT = "5rem"

const activeNav = css`
  background-color: #ffffff;
  color: #000000;
  border-bottom: 1px solid #eeeeee;
`
const fixedNav = css`
  position: fixed;
  top: 0;
`

const Container = styled(_Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

interface NavProps {
  isActive: boolean
  isFixed: boolean
}

const Wrapper = styled.nav<NavProps>`
  position: absolute;
  bottom: 0;
  top: calc(${HEADER_HEIGHT} - ${NAV_HEIGHT});
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  width: 100vw;
  height: ${NAV_HEIGHT};
  z-index: 999;
  color: #ffffff;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  transition: background-color 0.3s, color 0.3s;

  ${props => props.isActive && activeNav}
  ${props => props.isFixed && fixedNav}
`

type Items = Array<{ id: string; text: string }>

const items: Items = [
  { id: "introduction", text: "Biographie" },
  { id: "discography", text: "Discographie" },
  { id: "tour", text: "Concerts" },
  { id: "footer", text: "Contact" },
]

export const Nav = () => {
  const {
    isNavActive,
    isNavFixed,
    isNavResponsive,
    setIsNavResponsive,
  } = useContext(NavContext)

  useEffect(() => {
    const watchMedia = () => {
      if (
        window.matchMedia(`screen and (max-width: ${theme.BREAKPOINTS.MEDIUM})`)
          .matches
      ) {
        setIsNavResponsive(true)
      } else {
        setIsNavResponsive(false)
      }
    }

    watchMedia()

    window.addEventListener("resize", watchMedia)

    return () => {
      window.removeEventListener("resize", watchMedia)
    }
  }, [])

  return (
    <Wrapper
      role="navigation"
      aria-label="Menu Principal"
      isActive={isNavActive}
      isFixed={isNavFixed}
    >
      <Container>
        <Logo />
        {isNavResponsive && <Hamburger />}
        <Navigation items={items} />
      </Container>
    </Wrapper>
  )
}
