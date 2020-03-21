import React, { useState } from "react"
import styled from "styled-components"

import {
  SmallContainer,
  Title as _Title,
  Text as _Text,
  Subtitle,
} from "../../components"
import spirit from "./spirit.jpg"
import eyeball from "./eyeball.jpg"
import album3 from "./album_3.jpg"
import album4 from "./album_4.png"

const Wrapper = styled.section`
  display: grid;
  grid-template: "a b" / 1fr 1fr;
`
const Start = styled.div`
  grid-area: a;
  display: grid;
  grid-template: repeat(2, auto) / 1fr 1fr;
`
const End = styled.div`
  grid-area: b;
  background: #2d3436;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
const Cd = styled.div<{ background: string }>`
  background: url(${props => props.background}) no-repeat center center / cover;
  padding-top: 100%;
`

const Title = styled(_Title)`
  margin-bottom: 3.125rem;
`

const Text = styled(_Text)`
  margin-bottom: 1.875rem;
`

const cds = [
  {
    id: 1,
    title: "Princes de l'amour",
    band: "Johnny Mafia",
    background: album1,
    description: "C'est un album de merde",
    spotify: "https://open.spotify.com/embed/album/0gwWHpUpCjX0Ax8cspQqf4",
  },
  {
    id: 2,
    title: "Spirit",
    band: "Johnny Mafia",
    background: album4,
    description: "bbbb",
    spotify: "https://open.spotify.com/embed/album/53UL53SNjuqTU5y9AnK4UA",
  },
  {
    id: 3,
    title: "Eyeball",
    band: "Johnny Mafia",
    background: album3,
    description: "bbbb",
    spotify: "https://open.spotify.com/embed/album/1mrs8tyB2kSpUZ7ZeHCuyU",
  },
  {
    id: 4,
    title: "Instead",
    band: "VEB Project",
    background: album2,
    description: "bbbb",
    spotify: "https://open.spotify.com/embed/album/0gwWHpUpCjX0Ax8cspQqf4",
  },
]

export const Discography = () => {
  const [selectedCd, setSelectedCd] = useState(cds[0])

  const handleClick = id => {
    console.log(id)
    const cd = cds.find(cd => cd.id === id)
    console.log(cd)

    setSelectedCd(cd)
  }

  return (
    <Wrapper>
      <Start>
        {cds.map(cd => (
          <Cd
            key={cd.id}
            background={cd.background}
            onClick={() => handleClick(cd.id)}
          />
        ))}
      </Start>
      <End>
        <Title>{selectedCd.title}</Title>
        <Subtitle>{selectedCd.band}</Subtitle>
        <Text>{selectedCd.description}</Text>
        <iframe
          src={selectedCd.spotify}
          width="300"
          height="80"
          frameBorder="0"
          allow="encrypted-media"
        ></iframe>
      </End>
    </Wrapper>
  )
}
