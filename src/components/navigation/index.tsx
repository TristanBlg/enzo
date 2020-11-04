import React, { useContext, useEffect, useRef } from "react"
import styled, { css } from "styled-components"

import { NavContext } from "../../helpers/navContext"
import { scrollBy } from "../../helpers/scrollBy"

const navResponsive = css`
  position: fixed;
  top: 0;
  min-width: 17.5rem;
  width: 80%;
  height: 100vh;
  right: 0;
  padding: 4rem 4rem 4rem 0;
  background: white;
  color: #111 !important;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  transform: translate3d(100%, 0, 0);
  transition: 0.3s transform ease-in-out;
`
const navResponsiveActive = css`
  transform: translate3d(0%, 0, 0);
  transition: 0.3s transform 0.2s ease-in-out;
  opacity: 1;
`
const backgroundResponsiveActive = css`
  transform: translate3d(0%, 0, 0);
  transition: 0.2s opacity ease-in-out;
  opacity: 1;
`
const Nav = styled.ul<{ isActive: boolean }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: ${props => props.theme.BREAKPOINTS.sm}) {
    ${navResponsive}

    ${props => props.isActive && navResponsiveActive}
  }
`

const Background = styled.div<{ isActive: boolean }>`
  @media screen and (max-width: ${props => props.theme.BREAKPOINTS.sm}) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    opacity: 0;
    transform: translate3d(100%, 0, 0);
    transition: 0.2s opacity 0.3s ease-in-out, 0s transform 0.5s;
    ${props => props.isActive && backgroundResponsiveActive}
  }
`

const itemActive = css`
  color: #111111;
`

interface ItemProps {
  isResponsive: boolean
  onClick: Function
}

const itemResponsive = css`
  margin-left: 0;
  font-size: 1.25rem;
  margin-bottom: 2rem;
`

const Item = styled.li<ItemProps>`
  margin-left: 2rem;
  cursor: pointer;

  ${props => props.isResponsive && itemResponsive}
`

type Items = Array<{ id: string; text: string }>

interface NavigationProps {
  items: Items
}

export const Navigation = ({ items, ...props }: NavigationProps) => {
  const {
    isNavResponsive,
    isNavResponsiveActive,
    setIsNavResponsiveActive,
  } = useContext(NavContext)

  const navRef = useRef(null)

  const handleClick = (id: string) => {
    if (isNavResponsive) setIsNavResponsiveActive(!isNavResponsiveActive)

    scrollBy(id, 80)
  }

  const handleClickOutside = (event: MouseEvent) => {
    var isClickInsideElement = navRef.current.contains(event.target)

    if (!isClickInsideElement) {
      if (isNavResponsive) {
        setIsNavResponsiveActive(!isNavResponsiveActive)
      }
    }
  }
  useEffect(() => {
    if (isNavResponsiveActive) {
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isNavResponsiveActive])

  return (
    <Background isActive={isNavResponsiveActive}>
      <Nav ref={navRef} {...props} isActive={isNavResponsiveActive}>
        {items.map((item, key) => (
          <Item
            key={key}
            isResponsive={isNavResponsive}
            onClick={() => handleClick(`#${item.id}`)}
          >
            {item.text}
          </Item>
        ))}
      </Nav>
    </Background>
  )
}
