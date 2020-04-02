import React from "react"
import styled from "styled-components"

import {
  Text as _Text,
  Subtitle as _Subtitle,
  Container,
  SocialMedia,
} from "../../components"
// @ts-ignore
import songkick from "./songkick.png"

const Wrapper = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 5.625rem 2rem 3.125rem;

  @media screen and (max-width: ${props => props.theme.BREAKPOINTS.MEDIUM}) {
    grid-template-columns: 1fr;
  }
`
const Column = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  @media screen and (max-width: ${props => props.theme.BREAKPOINTS.MEDIUM}) {
    grid-template-columns: 1fr;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`
const Box = styled.div`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`
const Subtitle = styled(_Subtitle)`
  margin-bottom: 1rem;
`

const Text = styled(_Text)`
  margin-bottom: 0.5rem;
`

export const Footer = () => {
  const date = new Date().getFullYear()

  return (
    <Wrapper as="footer" id="footer" role="contentinfo">
      <Column>
        <Box>
          <Subtitle>CONTACT</Subtitle>
          <Text>
            <Text as="a" href="mailto:boulangerenzo@gmail.com">
              boulangerenzo@gmail.com
            </Text>
          </Text>
        </Box>
      </Column>
      <Column>
        <Box>
          <Subtitle>RÉSEAUX SOCIAUX</Subtitle>
          <SocialMedia />
        </Box>
        <Box>
          <Subtitle>COPYRIGHTS</Subtitle>
          <Text>© Enzo BOULANGER {date}, Johnny Mafia</Text>
          <Text>
            <strong>Concerts</strong>
            <br />
            <img src={songkick} width="100" />
          </Text>
          <Text>
            Fait avec &#128154; par{" "}
            <a
              aria-label="Ouvrir la page LinkedIn de Tristan Boulanger"
              href="https://fr.linkedin.com/in/boulangertristan"
            >
              <strong>Tristan BOULANGER</strong>
            </a>
          </Text>
        </Box>
      </Column>
    </Wrapper>
  )
}
