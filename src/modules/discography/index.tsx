import React, { useState } from "react"
import styled from "styled-components"

import {
  Title as _Title,
  Text as _Text,
  Subtitle as _Subtitle,
} from "../../components"
import spiritCover from "./spirit.jpg"
import eyeballCover from "./eyeball.jpg"
import insteadCover from "./instead.jpg"
import princesdelamourCover from "./princesdelamour.jpg"

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
  cursor: pointer;
  filter: grayscale(0%);
  transition: filter 0.3s ease-in-out;

  &:hover {
    filter: grayscale(100%);
  }
`

const Title = styled(_Title)`
  margin-bottom: 0.5rem;
`

const Subtitle = styled(_Subtitle)`
  margin-bottom: 2rem;
`

const Text = styled(_Text)`
  margin-bottom: 2rem;
`

const cds = [
  {
    id: 1,
    title: "PRINCES DE L'AMOUR",
    band: "JOHNNY MAFIA",
    background: princesdelamourCover,
    description: "2018",
    spotify: "https://open.spotify.com/embed/album/0gwWHpUpCjX0Ax8cspQqf4",
  },
  {
    id: 2,
    title: "SPIRIT",
    band: "JOHNNY MAFIA",
    background: spiritCover,
    description: "2019",
    spotify: "https://open.spotify.com/embed/album/53UL53SNjuqTU5y9AnK4UA",
  },
  {
    id: 3,
    title: "EYEBALL",
    band: "JOHNNY MAFIA",
    background: eyeballCover,
    description: "2019",
    spotify: "https://open.spotify.com/embed/album/1mrs8tyB2kSpUZ7ZeHCuyU",
  },
  {
    id: 4,
    title: "INSTEAD",
    band: "VEB PROJECT",
    background: insteadCover,
    description: "2012",
    spotify: null,
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
        {selectedCd.spotify && (
          <iframe
            src={selectedCd.spotify}
            width="300"
            height="80"
            frameBorder="0"
            allow="encrypted-media"
          ></iframe>
        )}
      </End>
    </Wrapper>
  )
}
