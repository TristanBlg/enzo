import React from "react"
import styled from "styled-components"

import {
  SmallContainer,
  Title as _Title,
  Text as _Text,
  ResponsiveEmbed,
} from "../../components"
import proOrca from "./pro-orca.png"

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

const ProOrca = styled.img`
  width: 20rem;
  max-width: 100%;
  display: flex;
  margin: 0 auto 1.875rem;
`

export const Introduction = () => {
  return (
    <Wrapper id="introduction">
      <SmallContainer>
        <Title>BIOGRAPHIE</Title>
        <Text>
          Après avoir suivi un{" "}
          <strong>cursus Jazz et Musiques Actuelles</strong> au conservatoire,
          j’obtiens mon <strong>Diplôme d’Etude Musicale</strong>.
          <br />
          <strong>Batteur professionnel</strong>, je tourne actuellement avec le
          groupe « <strong>Johnny Mafia</strong> » (punk/rock) en France ainsi
          qu’à l’étranger (Angleterre, Belgique, Pays-Bas, Canada, ...). J’ai eu
          l’occasion de participer à de nombreux festivals, notamment au{" "}
          <strong>Paleo Festival</strong> (Suisse), au <strong>FME</strong>{" "}
          (Canada) et au <strong>Cabaret Vert</strong> (France), ce qui m’a
          permis de partager la scène avec des groupes comme{" "}
          <strong>Les Wampas</strong>, <strong>Eiffel</strong> et{" "}
          <strong>The Cure</strong>.
          <br />
          J'ai également participé à des <strong>
            émissions télévisées
          </strong>{" "}
          (FR3 Bourgogne Franche-Comté) et des <strong>interviews</strong> (FIP,
          la Grosse Radio, ...).
          <br />
          Le 2ème album du groupe, enregistré et mixé par{" "}
          <strong>Jim Diamond</strong> (White Stripes, Sonics) a fait l’objet de
          nombreux articles dans des magazines comme «{" "}
          <strong>Rolling Stones France</strong> », «{" "}
          <strong>Guitar Part Magazine</strong> », «{" "}
          <strong>Rock N Folk</strong> » et « <strong>Télérama</strong> »
        </Text>
        <Video
          title="Concert de Johnny Mafia à Paris"
          src="https://www.youtube.com/embed/7JTNXsxKIpk"
        />
        <Text>
          J’ai <strong>commencé la batterie à l’âge de 5 ans</strong> dans une
          école associative. En 2014, j’intègre la classe de TMD au lycée Carnot
          (Dijon) et m’inscris parallèlement au{" "}
          <strong>Conservatoire à Rayonnement Régional de Dijon</strong> en
          cursus Jazz.
          <br />
          En 2017, j’obtiens mon entrée en <strong>COP Jazz</strong> (Cycle
          d’Orientation Professionnel).
          <br />
          L’année suivante, à l’âge de 17 ans, je réussis le concours d’entrée
          au <strong>Conservatoire à Rayonnement Régional de Paris</strong> et
          reçois notamment, l’enseignement de{" "}
          <strong>Jean-Michel Kajdan</strong> (Michel Jonaz, Didier Lockwood) et
          d'<strong>Emiliano Turi</strong> (Jeanne Added, Eiffel).
        </Text>
        <Text>
          Durant mon parcours, j’ai eu l’occasion de participer à des
          stages/masterclasses avec <strong>Peter Erskine</strong>,{" "}
          <strong>Damien Schmitt</strong>, <strong>Franck Agulhon</strong>,{" "}
          <strong>Nicolas Bastos</strong> (Dagoba),{" "}
          <strong>Farid Medjane</strong> (Trust), ...
        </Text>
        <ProOrca src={proOrca} alt="pro-orca logo" />
        <Text>
          Je suis <strong>sponsorisé</strong> par la marque de baguette{" "}
          <strong>Proorca</strong> depuis 2018.
        </Text>
      </SmallContainer>
    </Wrapper>
  )
}
