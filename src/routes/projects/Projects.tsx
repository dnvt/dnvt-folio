import React, { lazy, Suspense, useEffect, useMemo } from "react"
import { useTheme } from "react-jss"
import { Theme } from "../../utils/theme/theme"
import { HeroVignette } from "../../components/vignettes/Vignettes"
import { useMainColor } from "../../hooks/useSetMainColor"
import SpacerEightyHalf from "../../utils/spacer/variations/SpacerEightyHalf"
import Spacer from "../../utils/spacer/Spacer"
import { useIntroTransition } from "../../hooks/useHeroTransition"
import { DocumentSizeProvider } from "../../hooks/useDimensionSize"
import Grid from "../../utils/grids/Grid"
import { ProjectsProps } from "./ProjectsProps"
import Container from "../../components/containers/Container"
import Font from "../../utils/fonts/Font"
import ProjectIntroduction from "./segments/ProjectIntroduction"
import getContent from "./Projects.content"

////////////////////////////////////////////////////////////////////////////////

const ListofImages = lazy(() => import("./segments/ProjectListImages"))
const ThanksProject = lazy(() => import("./segments/ProjectThanks"))
const FooterCards = lazy(() => import("../../components/cards/layouts/FooterCards"))

const Projects: React.FC<ProjectsProps> = ({ type }) => {
  const theme: Theme = useTheme()
  const [color, setColor] = useMainColor()
  const [heroTransition, setHeroTransition] = useIntroTransition()

  const PROJECTS_CONTENT = getContent(color, theme)
  const CONTENT = useMemo(() => PROJECTS_CONTENT[type], [PROJECTS_CONTENT, type])

  useEffect(() => {
    setHeroTransition((heroTransition: any) => { return { ...heroTransition, [type]: false } })
    setColor(theme.projects[type].text)
  }, [heroTransition, setColor, setHeroTransition, theme.projects, type])


  return (
    <DocumentSizeProvider>
      <Grid />
      <div style={{ opacity: heroTransition[type] ? 0 : 1, transition: "opacity .6s ease" }}>
        <HeroVignette
          src={CONTENT.HERO.images}
          background={CONTENT.HERO.backgroundColor || theme.background.basic}
          transition={heroTransition[type]}
        />
        <SpacerEightyHalf />
        <ProjectIntroduction content={CONTENT.INTRO} />
        <Suspense fallback={<Container><Spacer height={80} /><Font type="text">Loading...</Font></Container>}>
          <ListofImages images={CONTENT.IMAGES} />
          <ThanksProject content={CONTENT.THANKS} />
          <Spacer contained height={184} />
          <FooterCards content={CONTENT.FOOTER} />
        </Suspense>
      </div>
    </DocumentSizeProvider>
  )
}

export default Projects

