import React, { useRef, useEffect, useContext } from "react"
import styled from "styled-components"

import banner from "./banner.jpg"
import { NavContext } from "../../helpers/navContext"

export const HEADER_HEIGHT = "40rem"

const Wrapper = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${banner}) no-repeat right top / cover;
  height: ${HEADER_HEIGHT};
  color: #ffffff;
`

// filter: grayscale(100%);

const Name = styled.h1`
  font-weight: 700;
  font-size: 4.5rem;
  letter-spacing: 0.3rem;
  margin: 0;
  text-transform: uppercase;
`

const Description = styled.h2`
  font-weight: 500;
  font-size: 1.25rem;
  letter-spacing: 0.3rem;
  margin: 0;
  text-transform: uppercase;
`

function getElementPosition(element) {
  if (!element) return false
  const { bottom } = element.getBoundingClientRect()
  return bottom
}

export const Header = () => {
  const WrapperRef = useRef(null)
  const { setIsNavActive, setIsNavFixed } = useContext(NavContext)

  useEffect(() => {
    if (WrapperRef.current) {
      const handleScroll = () => {
        const pos = getElementPosition(WrapperRef.current)

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
    }
  }, [WrapperRef.current])

  return (
    <>
      <Wrapper ref={WrapperRef}>
        <Name>ENZO BOULANGER</Name>
        <Description>Batteur, guitariste, bassiste et compositeur</Description>
      </Wrapper>
    </>
  )
}
