import React from "react"
import styled from "styled-components"

import {
  FixedBar as _FixedBar,
  PositionEnum,
  Instagram,
  Facebook,
  Youtube,
  Spotify,
} from "../../components"

export const FixedBar = styled(_FixedBar)`
  justify-content: center;
  align-items: space-between;
  padding: 0 0 0 2rem;
`
export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
export const Link = styled.a`
  display: block;
  padding: 0.625rem;
  text-align: center;
  margin: 1.25rem 0;
  color: #fff;
`

export const SocialMedia = () => {
  return (
    <FixedBar position={PositionEnum.left}>
      <List>
        <li>
          <Link href="https://www.instagram.com/enzo.boulanger">
            <Instagram />
          </Link>
        </li>
        <li>
          <Link href="https://www.facebook.com/enzoboulanger89">
            <Facebook />
          </Link>
        </li>
        <li>
          <Link href="https://www.youtube.com/channel/UCjt6kbGODByC5xsiVto9LJA">
            <Youtube />
          </Link>
        </li>
        <li>
          <Link href="https://open.spotify.com/artist/7iM6UV8wXD4l2bS2QxdOPY">
            <Spotify />
          </Link>
        </li>
      </List>
    </FixedBar>
  )
}
