import React from "react"
import { createGlobalStyle } from "styled-components"

import { ResponsiveEmbed } from "../components"
import { Header, Introduction, Nav, Discography, SocialMedia } from "../modules"
import { globalStyles } from "../theme"
import { NavProvider } from "../helpers/navContext"

const GlobalStyle = createGlobalStyle`${globalStyles}`

export default () => (
  <>
    <GlobalStyle />
    <NavProvider>
      <Nav />
      <Header />
      <Introduction />
      <Discography />
      <Introduction />

      {/* <SocialMedia /> */}
      {/* <ResponsiveEmbed src="https://www.youtube.com/embed/7JTNXsxKIpk" /> */}
    </NavProvider>
  </>
)
