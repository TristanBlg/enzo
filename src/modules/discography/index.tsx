import React, { useState, useEffect } from "react"
import styled from "styled-components"

import {
  Title as _Title,
  Text as _Text,
  Subtitle as _Subtitle,
} from "../../components"
// @ts-ignore
import spiritCover from "./spirit.jpg"
// @ts-ignore
import eyeballCover from "./eyeball.jpg"
// @ts-ignore
import insteadCover from "./instead.jpg"
// @ts-ignore
import princesdelamourCover from "./princesdelamour.jpg"

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: ${props => props.theme.BREAKPOINTS.MEDIUM}) {
    grid-template-columns: 1fr;
  }
`
const Start = styled.div`
  display: grid;
  grid-template: repeat(2, auto) / 1fr 1fr;
`
const End = styled.div`
  background: #2d3436;
  padding: 2rem;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (max-width: ${props => props.theme.BREAKPOINTS.MEDIUM}) {
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

export const Discography = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(albums[0])

  // useEffect(() => {
  //   const API_KEY = "7113374"
  //   const ARTIST_ID = "7113374"

  //   fetch(
  //     `https://api.songkick.com/api/3.0/artists/${ARTIST_ID}/calendar.json?apikey=${API_KEY}`
  //   ).then(function(response) {
  //     if (response.ok) {
  //       console.log(response)
  //     } else {
  //       console.log("Mauvaise réponse du réseau", response)
  //     }
  //   })
  // }, [])

  const handleClick = (id: string) => {
    const album: Album = albums.find(album => album.id === id)

    setSelectedAlbum(album)
  }

  return (
    <Wrapper id="discography">
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
        <Title>{selectedAlbum.title}</Title>
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
    </Wrapper>
  )
}
