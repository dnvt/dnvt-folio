import React from "react"
import Column from "../../../../components/containers/Column"
import Container from "../../../../components/containers/Container"
import Font from "../../../../utils/fonts/Font"
import SpacerFortyHalf from "../../../../utils/spacer/variations/SpacerFortyHalf"
import { ParagraphProps } from "../ProjectsProps"
import ParagraphModule from "./ParagraphModule"


const ThanksProject: React.FC<{ content: ParagraphProps[] }> = ({ content }) => {
  const rows = content.map(ParagraphModule)

  return (
    <Container>
      <SpacerFortyHalf />
      <Column spacer="third">
        {rows}
      </Column>
      <Font type='h3'>
        <span role='img' aria-label='cheers'>
          ✌🏽
        </span>
      </Font>
    </Container>
  )
}

export default ThanksProject
