import React, { useEffect, useMemo } from "react"
import { useTheme } from "react-jss"
import { useMainColor } from "../../../../hooks/useSetMainColor"
import { Theme } from "../../../../utils/theme/theme"
import FooterCards from "../../../../components/cards/layouts/FooterCards"
import Grid from "../../../../utils/grids/Grid"
import Sidelines from "../../../../utils/sidelines/Sidelines"
import Spacer from "../../../../utils/spacer/Spacer"
import { BigVignette, HeroVignette } from "../../../../components/vignettes/Vignettes"
import { useIntroTransition } from "../../../../hooks/useHeroTransition"
import DashboardProduction from "./segments/DashboardProduction"
import DashboardIntroduction from "./segments/DashboardIntroduction"
import DashboardProcess from "./segments/DashboardProcess"
import { DocumentSizeProvider } from "../../../../hooks/useDimensionSize"
import DashboardContext from "./segments/DashboardContext"
import DashRequirements from "./segments/DashboardRequirement"
import DashDesigns from "./segments/DashboardDesigns"

// 
import heroPng from "../../../../assets/images/USMobile/System/DashboardHero.png"
import heroWebp from "../../../../assets/images/USMobile/System/DashboardHero.webp"
import diagramPng from "../../../../assets/images/USMobile/System/Diagram.png"
import diagramWebp from "../../../../assets/images/USMobile/System/Diagram.webp"
import DAHSBOARD_CONTENT from "./Dashboard.content"
import DashLibrary from "./segments/DashboardLibrary"

const Dashboard: React.FC = () => {
  const theme: Theme = useTheme()
  const content = useMemo(() => DAHSBOARD_CONTENT, [])
  const [, setColor] = useMainColor()
  const [heroTransition, setHeroTransition] = useIntroTransition()

  useEffect(() => {
    setColor(theme.projects.usmobile.text)
    setHeroTransition({ usm_system: false })
  }, [setColor, setHeroTransition, theme.projects.usmobile.text])

  return (
    <DocumentSizeProvider>
      <Grid />
      <Sidelines />
      <div style={{ opacity: heroTransition.usm_system ? 0 : 1, transition: "opacity .6s ease" }}>
        <HeroVignette
          src={[heroPng, heroWebp]}
          background={theme.projects.usmobile.background}
          transition={heroTransition.usm_system}
        />
        <DashboardIntroduction />
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
      </div>
    </DocumentSizeProvider>
  )
}

export default Dashboard
