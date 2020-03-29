import React from "react"
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

export const Introduction = () => {
  return (
    <Wrapper id="introduction">
      <SmallContainer>
        <Title>BIOGRAPHIE</Title>
        <Text>
          J’ai commencé à <strong>jouer de la batterie à l’âge de 5 ans</strong>{" "}
          grâce à mon père, Valéry Boulanger, professeur de basse et excellent
          pédagogue, à l’école musiques actuelles « Rock and Swing » à Sens
          (89). Je poursuis mes études musicales dans différents conservatoires
          du département puis en 2014,{" "}
          <strong>j'intègre la classe de TMD</strong> au lycée Carnot à Dijon
          (21) et m’inscris parallèlement au CRR en classe de Jazz. L’année de
          ma terminale, je <strong>valide mon entrée en COP Jazz</strong> (
          cycle d’orientation professionnel ). Le Bac en poche, je tente le
          concours d’entrée au{" "}
          <strong>CRR de Paris en musiques actuelles</strong> : le résultat est
          positif et j’y suis <strong>admis à l’âge de 17 ans</strong>&nbsp;!
          <br />
          Je suis la <strong>formation du Diplôme Etudes Musicales</strong>{" "}
          pendant 1 an où j’ai pu <strong>recevoir l’enseignement</strong> de
          musiciens tels que <strong>Jean-Michel Kajdan</strong> ( Michel Jonaz,
          Joe Dassin, Didier Lokcwood ), <strong>Emiliano Turi</strong> ( Jeanne
          Added, Eiffel.. ),
          <strong>Tao Elrich</strong> ( Panam Panic, Ishkero.. ) etc…
          <br />
          Je <strong>finalise mon DEM</strong> au CRD d’Auxerre que j’obtiens en
          2019.
        </Text>
        <Video
          title="Concert de Johnny Mafia à Paris"
          src="https://www.youtube.com/embed/7JTNXsxKIpk"
        />
        <Text>
          Mon <strong>expérience scénique a commencé à l’âge de 9 ans</strong>{" "}
          avec le groupe VEB Project formé par mon père qui me permettra entre
          2007 et 2012 de faire <strong>une centaine de concerts</strong> et d’
          <strong>enregistrer deux EP 5 titres</strong>.
          <br />
          Après avoir joué dans un groupe de reprises pendant deux ans, je
          rejoins le groupe <strong>Johnny Mafia</strong> ( garage/punk/rock )
          avec lequel j’intègre le <strong>monde professionnel</strong> en
          parcourant de <strong>très nombreuses scènes françaises</strong> ( la
          Vapeur, la Maroquinerie, le Brise Glace, le Transbordeur, le Trabendo,
          le Café Charbon, le Cabaret Vert, le Rockabylette ){" "}
          <strong>et internationales</strong>( le Paléo festival, le Great
          Escape festival à Brighton, l’Eurosonic au Pays-Bas, FME au canada… ).
        </Text>
      </SmallContainer>
    </Wrapper>
  )
}
