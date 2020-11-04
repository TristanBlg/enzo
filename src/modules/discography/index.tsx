import React, { useState } from "react"
import styled, { css } from "styled-components"

import {
  Title as _Title,
  Text as _Text,
  Subtitle as _Subtitle,
} from "../../components"
import spiritCover from "./spirit.jpg"
import eyeballCover from "./eyeball.jpg"
import insteadCover from "./instead.jpg"
import princesdelamourCover from "./princesdelamour.jpg"
import { useBreakpoint } from "../../helpers/breakpointContext"

const MobileWrapper = styled.section`
  padding: 6.875rem 2rem 5rem;\
`
const DesktopWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: ${props => props.theme.BREAKPOINTS.sm}) {
    grid-template-columns: 1fr;
  }
`

const MobileContainer = styled.section`
  display: grid;
  grid-row-gap: 4rem;
`

const Start = styled.div`
  display: grid;
  grid-template: repeat(2, auto) / 1fr 1fr;
`

const End = styled.div`
  background: #38ada9;
  background: linear-gradient(90deg, #079992 0%, #38ada9 100%);
  padding: 2rem;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (max-width: ${props => props.theme.BREAKPOINTS.sm}) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`

const Bloc = styled.div<{ background: string }>`
  background: url(${props => props.background}) no-repeat center center / cover;
  padding-top: 100%;
  cursor: pointer;
`

const Title = styled(_Title)`
  margin-bottom: 3.125rem;
`

const BlockTitle = styled(_Title)`
  font-weight: 700;
  margin-bottom: 0.5rem;
`

const Subtitle = styled(_Subtitle)`
  margin-bottom: 2rem;
`

const Text = styled(_Text)`
  color: #ffffff;
  margin-bottom: 2rem;
`

const Iframe = styled.iframe`
  max-width: 100%;
  justify-self: center;
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

const albums: Albums = [
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
    spotify: "https://open.spotify.com/embed/album/53UL53SNjuqTU5y9AnK4UA",
  },
  {
    id: "3",
    title: "EYEBALL",
    band: "JOHNNY MAFIA",
    background: eyeballCover,
    description: "2019",
    spotify: "https://open.spotify.com/embed/album/1mrs8tyB2kSpUZ7ZeHCuyU",
  },
  {
    id: "4",
    title: "INSTEAD",
    band: "VEB PROJECT",
    background: insteadCover,
    description: "2012",
  },
]

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
  const [selectedAlbum, setSelectedAlbum] = useState(albums[0])

  const breakpoints = useBreakpoint()

  const handleClick = (id: string) => {
    const album: Album = albums.find(album => album.id === id)

    setSelectedAlbum(album)
  }

  const renderDesktopView = () => (
    <DesktopWrapper id="discography">
      <Start>
        {albums.map(album => (
          <Bloc
            key={album.id}
            background={album.background}
            onClick={() => handleClick(album.id)}
          />
        ))}
      </Start>
      <End>
        <BlockTitle>{selectedAlbum.title}</BlockTitle>
        <Subtitle>{selectedAlbum.band}</Subtitle>
        <Text>{selectedAlbum.description}</Text>
        {selectedAlbum.spotify && (
          <Iframe
            src={selectedAlbum.spotify}
            aria-label={`${selectedAlbum.title} par ${selectedAlbum.band}`}
            width="300"
            height="80"
            frameBorder="0"
            allow="encrypted-media"
          ></Iframe>
        )}
      </End>
    </DesktopWrapper>
  )

  const renderMobileView = () => (
    <MobileWrapper id="discography">
      <Title>DISCOGRAPHIE</Title>
      <MobileContainer>
        {mobileAlbums.map(album => (
          <Iframe
            key={album.id}
            src={album.spotify}
            aria-label={`${album.title} par ${album.band}`}
            width="300"
            height="380"
            frameBorder="0"
            allow="encrypted-media"
          ></Iframe>
        ))}
      </MobileContainer>
    </MobileWrapper>
  )

  return (
    <>
      {breakpoints.sm === true && renderMobileView()}
      {breakpoints.sm === false && renderDesktopView()}
    </>
  )
}
