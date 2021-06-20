import React, { lazy, Suspense, useEffect, useMemo } from "react"
import { useTheme } from "react-jss"
import { useMainColor } from "../../../../hooks/useSetMainColor"
import { Theme } from "../../../../utils/theme/theme"
import Grid from "../../../../utils/grids/Grid"
import Spacer from "../../../../utils/spacer/Spacer"
import { BigVignette, HeroVignette } from "../../../../components/vignettes/Vignettes"
import { useIntroTransition } from "../../../../hooks/useHeroTransition"
import { DocumentSizeProvider } from "../../../../hooks/useDimensionSize"
// 
import heroPng from "../../../../assets/images/USMobile/System/DashboardHero.png"
import heroWebp from "../../../../assets/images/USMobile/System/DashboardHero.webp"
import diagramPng from "../../../../assets/images/USMobile/System/Diagram.png"
import diagramWebp from "../../../../assets/images/USMobile/System/Diagram.webp"
import DAHSBOARD_CONTENT from "./Dashboard.content"
import Font from "../../../../utils/fonts/Font"
import Container from "../../../../components/containers/Container"
import DashboardIntroduction from "./segments/DashboardIntroduction"

////////////////////////////////////////////////////////////////////////////////

const DashboardContext = lazy(() => import("./segments/DashboardContext"))
const DashboardProcess = lazy(() => import("./segments/DashboardProcess"))
const DashRequirements = lazy(() => import("./segments/DashboardRequirement"))
const DashboardProduction = lazy(() => import("./segments/DashboardProduction"))
const DashDesigns = lazy(() => import("./segments/DashboardDesigns"))
const DashLibrary = lazy(() => import("./segments/DashboardLibrary"))
const FooterCards = lazy(() => import("../../../../components/cards/layouts/FooterCards"))

/**
 * This is US Mobile PWA Dashboard use
 */
const Dashboard: React.FC = () => {
  const theme: Theme = useTheme()
  const [, setColor] = useMainColor()
  const [heroTransition, setHeroTransition] = useIntroTransition()

  useEffect(() => {
    setHeroTransition((heroTransition: any) => { return { ...heroTransition, usm_system: false } })
    setColor(theme.projects.usmobile.text)
  }, [setColor, setHeroTransition, theme.projects.usmobile.text])

  const content = useMemo(() => DAHSBOARD_CONTENT, [])
  return (
    <DocumentSizeProvider>
      <Grid />
      <div style={{ opacity: heroTransition.usm_system ? 0 : 1, transition: "opacity .6s ease" }}>
        <HeroVignette
          src={[heroPng, heroWebp]}
          background={theme.projects.usmobile.background}
          transition={heroTransition.usm_system}
        />
        <DashboardIntroduction />
      </div>
      <Suspense fallback={<Container><Font type="text">Loading...</Font></Container>}>
        <DashboardContext />
        <DashboardProcess />
        <DashRequirements />
        <DashboardProduction color={theme.text.secondary} />
        <Spacer contained height={64} />
        <BigVignette
          height={496}
          alt='Example of a user journey for the Starter Kit activation feature, with its backend and business rules'
          background='#EEFAF4'
          src={[diagramPng, diagramWebp]}
        />
        <DashDesigns />
        <DashLibrary />
        <Spacer contained height={184} />
        <FooterCards content={content.FOOTER} />
      </Suspense>
    </DocumentSizeProvider>
  )
}

export default Dashboard
