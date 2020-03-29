import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { Helmet } from "react-helmet"

import {
  Header,
  Introduction,
  Nav,
  Discography,
  Tour,
  Footer,
} from "../modules"
import { globalStyles, theme } from "../theme"
import { NavProvider } from "../helpers/navContext"

const GlobalStyle = createGlobalStyle`${globalStyles}`

export default () => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Enzo Boulanger - Batteur et compositeur</title>
        <meta
          name="description"
          content="Site personnel d'Enzo Boulanger. Batteur, bassiste et compositeur. Membre du groupe Johnny Mafia."
        />
        <meta name="theme-color" content="#ffffff" />
        <html lang="fr" />
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
    </ThemeProvider>
  </>
)
