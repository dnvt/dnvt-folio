import React from "react"
import Container from "../../../components/containers/Container"
import Font from "../../../utils/fonts/Font"
import Spacer from "../../../utils/spacer/Spacer"
import Column from "../../../components/containers/Column"
import ExternalLink from "../../../ui/links/external-link/ExternalLink"
import ParagraphModule from "./ParagraphModule"
import { IntroType } from "../ProjectsProps"

const ProjectIntroduction: React.FC<{ content: IntroType }> = ({ content }) => {
  const rows = content.paragraph.map(ParagraphModule)

  return (
    <Container>
      <Font type='h4'>{content.section}</Font>
      <Font type='h1'>{content.title.value}</Font>
      <Spacer height={32} />
      <Font type='h5' style={{ color: content.typeOfProject.color }} >{content.typeOfProject.value}</Font>
      <Column spacer="third">
        {rows}
      </Column>
      {content.link && (
        <ExternalLink path={content.link}>{content.button || "Visit project"}</ExternalLink>
      )}
    </Container>
  )
}

export default ProjectIntroduction