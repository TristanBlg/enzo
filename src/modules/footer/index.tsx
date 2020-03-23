import React from "react"
import styled from "styled-components"

import {
  Text as _Text,
  Subtitle as _Subtitle,
  Container,
  SocialMedia,
} from "../../components"

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
  return (
    <Wrapper as="footer" id="footer">
      <Column>
        <Box>
          <Subtitle>GET IN TOUCH</Subtitle>
          <Text>
            <Text as="a" href="mailto:enzo.boulanger@gmail.com">
              enzo.boulanger@gmail.com
            </Text>
          </Text>
        </Box>
      </Column>
      <Column>
        <Box>
          <Subtitle>SOCIAL MEDIA</Subtitle>
          <SocialMedia />
        </Box>
        <Box>
          <Subtitle>COPYRIGHTS</Subtitle>
          <Text>© Enzo BOULANGER 2020, Johnny Mafia</Text>
          <Text>
            Build with &#128154; by{" "}
            <a href="https://fr.linkedin.com/in/boulangertristan">
              <strong>Tristan BOULANGER</strong>
            </a>
          </Text>
        </Box>
      </Column>
    </Wrapper>
  )
}
