import React, { useEffect, useState } from "react"
import styled from "styled-components"

import { Title as _Title, Subtitle, Text } from "../../components"

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
  margin-bottom: 1.125rem;
`

const ConcertTitle = styled(_Title)`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
`

const ConcertSubtitle = styled(Subtitle)`
  font-size: 1rem;
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
      height 0.0625rem;
      width: 2rem;
      background-color: #2d3436;
    }
  }
`

type Concert = {
  id: string
  date: string
  place: string
  band: string
}

export const Tour = () => {
  const [concerts, setConcerts]: [Concert[], Function] = useState([])

  useEffect(() => {
    fetch(
      `https://api.songkick.com/api/3.0/artists/${process.env.GATSBY_ARTIST_ID}/calendar.json?apikey=${process.env.GATSBY_API_KEY}`
    )
      .then(function(response) {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.statusText)
        }
      })
      .then(function(data) {
        const events = data.resultsPage.results.event.map(
          (concert): Concert => {
            return {
              id: concert.id.toString(),
              date: new Date(concert.start.date)
                .toLocaleDateString("fr", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
                .toLocaleUpperCase(),
              band: concert.performance
                .map(band => band.displayName)
                .join(", "),
              place: `${concert.venue.displayName}, ${concert.location.city}`,
            }
          }
        )

        setConcerts(events)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <Wrapper id="tour">
      <Title>CONCERTS</Title>
      {concerts.map(concert => (
        <Box key={concert.id}>
          <ConcertTitle>{concert.date}</ConcertTitle>
          <ConcertSubtitle>{concert.place}</ConcertSubtitle>
          <Text>{concert.band}</Text>
        </Box>
      ))}
    </Wrapper>
  )
}
