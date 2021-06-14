import React, { useEffect, useMemo } from "react"
import { useTheme } from "react-jss"
import { Theme } from "../../utils/theme/theme"
import { HeroVignette } from "../../components/vignettes/Vignettes"
import { useMainColor } from "../../hooks/useSetMainColor"
import SpacerEightyHalf from "../../utils/spacer/variations/SpacerEightyHalf"
import ProjectIntroduction from "./segments/ProjectIntroduction"
import FooterCards from "../../components/cards/layouts/FooterCards"
import Spacer from "../../utils/spacer/Spacer"
import getContent from "./Projects.Content"
import ListofImages from "./segments/ProjectListImages"
import ThanksProject from "./segments/ProjectThanks"
import { useIntroTransition } from "../../hooks/useHeroTransition"
import { DocumentSizeProvider } from "../../hooks/useDimensionSize"
import Sidelines from "../../utils/sidelines/Sidelines"
import Grid from "../../utils/grids/Grid"
import { ProjectsProps } from "./ProjectsProps"

const Projects: React.FC<ProjectsProps> = ({ type }) => {
  const theme: Theme = useTheme()
  const [color, setColor] = useMainColor()
  const [heroTransition, setHeroTransition] = useIntroTransition()

  const PROJECTS_CONTENT = getContent(color, theme)
  const CONTENT = useMemo(() => PROJECTS_CONTENT[type], [PROJECTS_CONTENT, type])

  useEffect(() => {
    setColor(theme.projects[type].text)
    setHeroTransition({ [type]: false })
  }, [setColor, setHeroTransition, theme.projects, type])


  return (
    <DocumentSizeProvider>
      <Grid />
      <Sidelines />
      <div style={{ opacity: heroTransition[type] ? 0 : 1, transition: "opacity .6s ease" }}>
        <HeroVignette
          src={CONTENT.HERO}
          background={CONTENT.HEROBACKGROUND || theme.background.basic}
          transition={heroTransition[type]}
        />
        <SpacerEightyHalf />
        <ProjectIntroduction content={CONTENT.INTRO} />
        <ListofImages images={CONTENT.IMAGES} />
        <ThanksProject content={CONTENT.THANKS} />
        <Spacer contained height={184} />
        <FooterCards content={CONTENT.FOOTER} />
      </div>
    </DocumentSizeProvider>
  )
}

export default Projects

