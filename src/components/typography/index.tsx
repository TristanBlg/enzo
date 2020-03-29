import styled, { css } from "styled-components"

const reset = css`
  margin: 0;
  padding: 0;
`

export const Title = styled.h3`
  ${reset}
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
`

export const Subtitle = styled.h4`
  ${reset}
  font-size: 1.125rem;
  font-weight: 400;
`

export const Text = styled.p`
  ${reset}
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: #666666;

  & strong {
    color: #111111;
  }
`
