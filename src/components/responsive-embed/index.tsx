import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  position: relative;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  padding-bottom: 56.25%;
`
const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

type Props = {
  src: string
  title: string
}

export const ResponsiveEmbed = ({ src, title, ...props }: Props) => {
  return (
    <Wrapper {...props}>
      <Iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        frameBorder="0"
      ></Iframe>
    </Wrapper>
  )
}
