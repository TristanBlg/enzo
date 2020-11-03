import React, { useContext } from "react"
import styled from "styled-components"

import { NavContext } from "../../helpers/navContext"

const Bar = styled.span<{ isNavActive: boolean }>`
  display: block;
  background: ${props => (props.isNavActive ? "#111111" : "#ffffff")};
  width: 100%;
  height: 0.125rem;
  position: absolute;
  right: 0;
`

const Button = styled.button<{ isNavResponsiveActive: boolean }>`
  height: 2.25rem;
  width: 1.875rem;
  padding: 0;
  background: none;
  border: 0;
  position: relative;
  cursor: pointer;
  z-index: 1;

  ${Bar} {
    transition: 0.3s width 0.2s ease-in-out;
    &:nth-child(1) {
      top: 0.625rem;
      width: ${props => (props.isNavResponsiveActive ? "50%" : "100%")};
    }
    &:nth-child(2) {
      top: 1.0625rem;
      width: ${props => (props.isNavResponsiveActive ? "100%" : "50%")};
    }
    &:nth-child(3) {
      top: 1.5rem;
      width: ${props => (props.isNavResponsiveActive ? "50%" : "100%")};
    }
  }
`

export const Hamburger = () => {
  const {
    isNavActive,
    isNavResponsiveActive,
    setIsNavResponsiveActive,
  } = useContext(NavContext)

  return (
    <Button
      aria-label="Ouvrir le menu"
      onClick={() => setIsNavResponsiveActive(!isNavResponsiveActive)}
      isNavResponsiveActive={isNavResponsiveActive}
    >
      <Bar isNavActive={isNavActive}></Bar>
      <Bar isNavActive={isNavActive}></Bar>
      <Bar isNavActive={isNavActive}></Bar>
    </Button>
  )
}
