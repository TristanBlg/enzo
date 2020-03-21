import React from "react"
import styled from "styled-components"

import {
  SmallContainer,
  Title as _Title,
  Text as _Text,
} from "../../components"

const Wrapper = styled.section`
  padding-top: 6.875rem;
  padding-bottom: 5rem;
  background-color: #f4f4f4;
`

const Title = styled(_Title)`
  margin-bottom: 3.125rem;
`

const Text = styled(_Text)`
  margin-bottom: 1.875rem;
`

export const Introduction = () => {
  return (
    <Wrapper>
      <SmallContainer>
        <Title>INTRODUCTION</Title>
        <Text>
          <strong>Sed ut perspiciatis</strong> unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo.
        </Text>
        <Text>
          <strong>Sed ut perspiciatis</strong> unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. <strong>Nemo enim ipsam voluptatem</strong> quia
          voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
          magni dolores eos qui ratione voluptatem sequi nesciunt.
        </Text>
      </SmallContainer>
    </Wrapper>
  )
}
