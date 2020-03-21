import React, { useContext } from "react"
import styled, { css } from "styled-components"

import { Logo, Navigation, MainContainer } from "../../components"
import { NavContext } from "../../helpers/navContext"
import { HEADER_HEIGHT } from "../"

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

const Container = styled(MainContainer)`
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

export const Nav = () => {
  const { isNavActive, isNavFixed } = useContext(NavContext)

  const items = [
    { text: "Biographie", isActive: true },
    { text: "Discographie", isActive: false },
    { text: "Sponsors", isActive: false },
    { text: "Concerts", isActive: false },
    { text: "Formations", isActive: false },
  ]

  return (
    <Wrapper isActive={isNavActive} isFixed={isNavFixed}>
      <Container>
        <Logo />
        <Navigation items={items} />
      </Container>
    </Wrapper>
  )
}
