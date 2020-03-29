import React from "react"
import styled from "styled-components"

import { Instagram, Facebook, Youtube, Spotify } from ".."

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`
export const Link = styled.a`
  text-align: center;
  margin-right: 1rem;
`

export const SocialMedia = () => {
  return (
    <List>
      <li>
        <Link
          aria-label="Ouvrir la page Instagram d'Enzo Boulanger"
          href="https://www.instagram.com/enzo.boulanger"
        >
          <Instagram aria-hidden="true" />
        </Link>
      </li>
      <li>
        <Link
          aria-label="Ouvrir la page Facebook d'Enzo Boulanger"
          href="https://www.facebook.com/enzoboulanger89"
        >
          <Facebook aria-hidden="true" />
        </Link>
      </li>
      <li>
        <Link
          aria-label="Ouvrir la page Youtube d'Enzo Boulanger"
          href="https://www.youtube.com/channel/UCjt6kbGODByC5xsiVto9LJA"
        >
          <Youtube aria-hidden="true" />
        </Link>
      </li>
      <li>
        <Link
          aria-label="Ouvrir la page Spotify de Johnny Mafia"
          href="https://open.spotify.com/artist/7iM6UV8wXD4l2bS2QxdOPY"
        >
          <Spotify aria-hidden="true" />
        </Link>
      </li>
    </List>
  )
}
