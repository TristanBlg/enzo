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
import { BreakpointProvider } from "../helpers/breakpointContext"

const GlobalStyle = createGlobalStyle`${globalStyles}`

export default () => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Helmet>
        <html lang="fr" />
        <meta charSet="utf-8" />
        <title>Enzo Boulanger - Batteur professionnel</title>
        <meta
          name="description"
          content="Site personnel d'Enzo Boulanger. Batteur professionnel et membre du groupe Johnny Mafia."
        />
        <meta name="theme-color" content="#ffffff" />
        <meta
          property="og:title"
          content="Enzo Boulanger - Batteur professionnel"
        />
        <meta
          property="og:description"
          content="Site personnel d'Enzo Boulanger. Batteur professionnel et membre du groupe Johnny Mafia."
        />
        <meta
          property="og:image"
          content="https://enzoboulanger.com/thumbnail.jpg"
        />
        <meta property="og:url" content="https://enzoboulanger.com" />
      </Helmet>
      {/* <BreakpointProvider queries={theme.QUERIES}> */}
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
      {/* </BreakpointProvider> */}
    </ThemeProvider>
  </>
)
