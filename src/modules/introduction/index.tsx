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
          Après avoir suivi un{" "}
          <strong>cursus Jazz et Musiques Actuelles</strong> au conservatoire,
          j’obtiens mon <strong>Diplôme d’Etude Musicale</strong>.
          <br />
          <strong>Batteur professionnel</strong>, je tourne actuellement avec le
          groupe « <strong>Johnny Mafia</strong> » (&nbsp;punk/rock&nbsp;) en
          France ainsi qu’à l’étranger (&nbsp;Angleterre, Belgique, Pays-Bas,
          Canada, etc.&nbsp;). J’ai eu l’occasion de participer à de nombreux
          festivals comme le <strong>Paleo Festival</strong> (Suisse),{" "}
          <strong>FME</strong> (Canada) et le <strong>Cabaret Vert</strong>{" "}
          (France), ce qui m’a permis de partager la scène avec des groupes
          comme <strong>Les Wampas</strong>, <strong>Eiffel</strong> et{" "}
          <strong>The Cure</strong>.
          <br />
          J'ai également participer à des <strong>
            émissions télévisées
          </strong>{" "}
          (&nbsp;FR3 Bourgogne Franche-Comté&nbsp;) et des{" "}
          <strong>interviews</strong> (&nbsp;FIP, la Grosse Radio&nbsp;).
          <br />
          Le 2ème album du groupe, enregistré et mixé par{" "}
          <strong>Jim Diamond</strong> (White Stripes, Sonics, …) a fait l’objet
          de nombreux articles dans les magazines comme «{" "}
          <strong>Rolling Stones France</strong> », «{" "}
          <strong>Guitar Part Magazine</strong> », «{" "}
          <strong>Rock N Folk</strong> », « <strong>Télérama</strong> », etc.
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
          En 2017, j’obtiens mon entrée en <strong>COP Jazz</strong>{" "}
          (&nbsp;Cycle d’Orientation Professionnel&nbsp;).
          <br />
          L’année suivante, à l’âge de 17 ans, je réussis le concours d’entrée
          au <strong>Conservatoire à Rayonnement Régional de Paris</strong> et
          reçoit notamment, l’enseignement de{" "}
          <strong>Jean-Michel Kajdan</strong> (&nbsp;Michel Jonaz, Didier
          Lockwood&nbsp;) et d'<strong>Emiliano Turi</strong> (&nbsp;Jeanne
          Added, Eiffel&nbsp;).
        </Text>
        <Text>
          Durant mon parcours, j’ai eu l’occasion de participer à des
          stages/masterclasses avec <strong>Peter Erskine</strong>,{" "}
          <strong>Damien Schmitt</strong>, <strong>Franck Agulhon</strong>,{" "}
          <strong>Nicolas Bastos</strong> (Dagoba) et de{" "}
          <strong>Farid Medjane</strong> (Trust).
        </Text>
      </SmallContainer>
    </Wrapper>
  )
}
