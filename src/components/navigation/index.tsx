import React, { useContext } from "react"
import styled, { css } from "styled-components"

import { NavContext } from "../../helpers/navContext"
import { scrollBy } from "../../helpers/scrollBy"

const navResponsive = css`
  position: fixed;
  top: 0;
  min-width: 17.5rem;
  width: 80%;
  box-shadow: -6.25rem 0 6.25rem rgba(0, 0, 0, 0);
  right: 0;
  padding: 4rem 4rem 4rem 0;
  background: white;
  color: #111 !important;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: flex-end;
  transform: translate3d(100%, 0, 0);
  transition: transform 0.3s ease-in-out;
`
const navResponsiveActive = css`
  transform: translate3d(0%, 0, 0);
  box-shadow: -6.25rem 0 6.25rem rgba(0, 0, 0, 0.4);
`
const Nav = styled.ul<{ isActive: boolean }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: ${props => props.theme.BREAKPOINTS.MEDIUM}) {
    ${navResponsive}

    ${props => props.isActive && navResponsiveActive}
  }
`

const itemActive = css`
  color: #111111;
`

interface ItemProps {
  isItemActive?: boolean
  isNavActive: boolean
  isResponsive: boolean
  onClick: Function
}

const itemResponsive = css`
  color: #111111;
  margin-left: 0;
  font-size: 1.25rem;
  margin-bottom: 2rem;
`

const Item = styled.li<ItemProps>`
  margin-left: 2rem;
  cursor: pointer;
  color: ${props => (props.isNavActive ? "#666666" : "#ffffff")};

  ${props => props.isNavActive && props.isItemActive && itemActive}
  ${props => props.isResponsive && itemResponsive}
`

type Items = Array<{ id: string; text: string }>

interface NavigationProps {
  items: Items
}

export const Navigation = ({ items, ...props }: NavigationProps) => {
  const {
    isNavActive,
    isNavResponsive,
    isNavResponsiveActive,
    setIsNavResponsiveActive,
  } = useContext(NavContext)

  const handleClick = id => {
    if (isNavResponsive) setIsNavResponsiveActive(!isNavResponsiveActive)

    scrollBy(id, 80)
  }

  return (
    <Nav {...props} isActive={isNavResponsiveActive}>
      {items.map((item, key) => (
        <Item
          key={key}
          isResponsive={isNavResponsive}
          isNavActive={isNavActive}
          isItemActive={false}
          onClick={() => handleClick(`#${item.id}`)}
        >
          {item.text}
        </Item>
      ))}
    </Nav>
  )
}
