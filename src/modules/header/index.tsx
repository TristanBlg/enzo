import React, { useRef, useEffect, useContext } from "react"
import styled from "styled-components"

import { NavContext } from "../../helpers/navContext"
import { getElementPosition } from "../../helpers/position"

export const HEADER_HEIGHT = "40rem"

const Wrapper = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #2d3436;
  height: ${HEADER_HEIGHT};
  color: #ffffff;
  padding: 0 2rem;
  text-align: center;
`

const Name = styled.h1`
  font-weight: 700;
  font-size: 4.5rem;
  letter-spacing: 0.3rem;
  margin: 0;
  text-transform: uppercase;

  @media screen and (max-width: ${props => props.theme.BREAKPOINTS.sm}) {
    font-size: 2.5rem;
  }
`

const Description = styled.h2`
  font-weight: 500;
  font-size: 1.25rem;
  letter-spacing: 0.3rem;
  margin: 0;
  text-transform: uppercase;

  @media screen and (max-width: ${props => props.theme.BREAKPOINTS.sm}) {
    font-size: 1rem;
  }
`

export const Header = () => {
  const WrapperRef = useRef(null)
  const { setIsNavActive, setIsNavFixed } = useContext(NavContext)

  useEffect(() => {
    const handleScroll = () => {
      const pos = getElementPosition(WrapperRef.current).bottom

      if (pos / 2 <= window.scrollY) {
        setIsNavActive(true)
      } else {
        setIsNavActive(false)
      }
      if (pos - 5 * 16 <= 0) {
        setIsNavFixed(true)
      } else {
        setIsNavFixed(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <Wrapper ref={WrapperRef} role="banner">
        <Name>ENZO BOULANGER</Name>
        <Description>Batteur professionnel</Description>
      </Wrapper>
    </>
  )
}
