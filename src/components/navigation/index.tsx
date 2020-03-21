import React, { useContext } from "react"
import styled, { css } from "styled-components"

import { NavContext } from "../../helpers/navContext"

const Nav = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`

const itemActive = css`
  color: #111111;
`

interface ItemProps {
  isActive?: boolean
  isNavActive: boolean
}

const Item = styled.li<ItemProps>`
  margin-left: 2rem;
  color: ${props => (props.isNavActive ? "#666666" : "#ffffff")};

  ${props => props.isActive && props.isNavActive && itemActive}
`

interface NavigationProps {
  items: Array<{
    text: string
    isActive: boolean
  }>
}
export const Navigation = ({ items, ...props }: NavigationProps) => {
  const { isNavActive } = useContext(NavContext)

  return (
    <Nav {...props}>
      {items.map((item, key) => (
        <Item key={key} isNavActive={isNavActive} isActive={item.isActive}>
          {item.text}
        </Item>
      ))}
    </Nav>
  )
}

const Bar = styled.span`
  display: block;
  background: black;
  width: 100%;
  height: 0.125rem;
  position: absolute;
  right: 0;
`

const Button = styled.button`
  height: 2.25rem;
  width: 1.875rem;
  padding: 0;
  background: none;
  border: 0;
  position: relative;
  cursor: pointer;

  ${Bar} {
    &:nth-child(1) {
      top: 0.625rem;
    }
    &:nth-child(2) {
      top: 1.0625rem;
      width: 50%;
    }
    &:nth-child(3) {
      top: 1.5rem;
    }
  }
`

export const Hamburger = () => {
  return (
    <Button>
      <Bar></Bar>
      <Bar></Bar>
      <Bar></Bar>
    </Button>
  )
}
