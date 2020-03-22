import React from "react"
import { createGlobalStyle } from "styled-components"
import { Helmet } from "react-helmet"

import {
  Header,
  Introduction,
  Nav,
  Discography,
  Tour,
  Footer,
} from "../modules"
import { globalStyles } from "../theme"
import { NavProvider } from "../helpers/navContext"

const GlobalStyle = createGlobalStyle`${globalStyles}`

export default () => (
  <>
    <GlobalStyle />
    <Helmet>
      <meta charSet="utf-8" />
      <title>Enzo Boulanger - Batteur et compositeur</title>
    </Helmet>
    <NavProvider>
      <Nav />
      <Header />
      <main role="main">
        <Introduction />
        <Discography />
        <Tour />
      </main>
      <Footer />
    </NavProvider>
  </>
)
