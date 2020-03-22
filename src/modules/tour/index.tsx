import React from "react"
import styled from "styled-components"

import { Title as _Title, Text, Subtitle as _Subtitle } from "../../components"

const Wrapper = styled.section`
  padding-top: 4.875rem;
  padding-bottom: 3rem;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const Title = styled(_Title)`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
`

const Subtitle = styled(_Subtitle)`
  font-siwe: 1rem;
`

const Box = styled.div`
  padding: 2rem 0;
  text-align: center;
  position: relative;

  &:not(:last-child){
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: calc(50% - 1rem);
      height 1px;
      width: 2rem;
      background-color: #2d3436;
    }
  }
`

type Concerts = Array<{
  id: string
  date: string
  place: string
  name: string
}>

const concerts: Concerts = [
  {
    id: "1",
    date: "JEUDI 2 AVRIL",
    place: "La lune des pirates, Amiens",
    name: "Johnny Mafia",
  },
  {
    id: "2",
    date: "VENDREDI 17 AVRIL",
    place: "Le Poulpe,  Reignier-Esery",
    name: "Johnny Mafia",
  },
  {
    id: "3",
    date: "VENDREDI 24 AVRIL",
    place: "L'Empreinte, Savigny le Temple",
    name: "Johnny Mafia w/ Pogo Car Crash Control",
  },
  {
    id: "4",
    date: "SAMEDI 16 MAI",
    place: "L'Echonova, Saint-Avé",
    name: "Johnny Mafia",
  },
]

export const Tour = () => {
  return (
    <Wrapper id="tour">
      {concerts.map(concert => (
        <Box key={concert.id}>
          <Title>{concert.date}</Title>
          <Subtitle>{concert.place}</Subtitle>
          <Text>{concert.name}</Text>
        </Box>
      ))}
    </Wrapper>
  )
}
