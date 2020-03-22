import styled, { css } from "styled-components"

const responsive = css`
  max-width: 100%;
  margin: 0 auto;
`

export const Container = styled.div`
  width: 68rem;

  ${responsive}
`

export const SmallContainer = styled.div`
  width: 35.625rem;

  ${responsive}
`
