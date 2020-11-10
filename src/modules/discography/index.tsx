import React, { useState } from "react"
import styled, { css } from "styled-components"

import {
  Title as _Title,
  Text as _Text,
  Subtitle as _Subtitle,
} from "../../components"
import spiritCover from "./spirit.jpg"
import eyeballCover from "./eyeball.jpg"
import princesdelamourCover from "./princesdelamour.jpg"

const Title = styled(_Title)`
  margin-bottom: 3.125rem;
`
const MobileWrapper = styled.section`
  padding: 6.875rem 2rem 5rem;
`
const MobileContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

  @media screen and (max-width: ${props => props.theme.BREAKPOINTS.sm}) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const Iframe = styled.iframe`
  max-width: 100%;
  justify-self: center;

  @media screen and (min-width: ${props => props.theme.BREAKPOINTS.sm}) {
    &:nth-child(3n) {
      justify-self: start;
    }
    &:nth-child(3n + 1) {
      justify-self: end;
    }
  }
`

type Album = {
  id: string
  title: string
  band: string
  background: string
  description: string
  spotify?: string
}
type Albums = Array<Album>

const mobileAlbums: Albums = [
  {
    id: "1",
    title: "PRINCES DE L'AMOUR",
    band: "JOHNNY MAFIA",
    background: princesdelamourCover,
    description: "2018",
    spotify: "https://open.spotify.com/embed/album/0gwWHpUpCjX0Ax8cspQqf4",
  },
  {
    id: "2",
    title: "SPIRIT",
    band: "JOHNNY MAFIA",
    background: spiritCover,
    description: "2019",
    spotify: "https://open.spotify.com/embed/track/2taD1sYUmaSVf1QnCJFrxF",
  },
  {
    id: "3",
    title: "EYEBALL",
    band: "JOHNNY MAFIA",
    background: eyeballCover,
    description: "2019",
    spotify: "https://open.spotify.com/embed/track/5aDBTKaM94v95X2Ne3y3Nk",
  },
]

export const Discography = () => {
  return (
    <MobileWrapper id="discography">
      <Title>DISCOGRAPHIE</Title>
      <MobileContainer>
        {mobileAlbums.map(album => (
          <>
            <Iframe
              key={album.id}
              src={album.spotify}
              aria-label={`${album.title} par ${album.band}`}
              width="300"
              height="380"
              frameBorder="0"
              allow="encrypted-media"
            ></Iframe>
          </>
        ))}
      </MobileContainer>
    </MobileWrapper>
  )
}
