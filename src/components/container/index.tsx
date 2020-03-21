import styled, { css } from "styled-components"

const responsive = css`
  max-width: 100%;
  margin: 0 auto;
`

export const MainContainer = styled.main`
  width: 68rem;

  ${responsive}
`

export const SmallContainer = styled.main`
  width: 35.625rem;

  ${responsive}
`
