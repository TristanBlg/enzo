import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"

import {
  SmallContainer,
  Title as _Title,
  Text as _Text,
  ResponsiveEmbed,
} from "../../components"

const Wrapper = styled.section`
  padding: 6.875rem 2rem 5rem;
  background-color: #f4f4f4;
`

const Title = styled(_Title)`
  margin-bottom: 3.125rem;
`

const Text = styled(_Text)`
  margin-bottom: 1.875rem;
`

const Video = styled(ResponsiveEmbed)`
  margin-bottom: 1.875rem;
`

export default () => {
  const data = useStaticQuery(graphql`
    {
      mdx(frontmatter: { title: { eq: "introduction" } }) {
        body
      }
    }
  `)

  const { mdx } = data
  const shortcodes = { Video, Text }

  return (
    <Wrapper id="introduction">
      <SmallContainer>
        <Title>INTRODUCTION</Title>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </SmallContainer>
    </Wrapper>
  )
}
