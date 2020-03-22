import { css } from "styled-components"

export const globalStyles = css`
  body {
    margin: 0;
    padding: 0;
    font-family: Lato, Goodsans, sans-serif;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #111111;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  a {
    color: #111111;
    text-decoration: none;
  }
`
