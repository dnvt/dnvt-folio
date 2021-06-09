import React, { useEffect } from "react"
import { useTheme } from "react-jss"
import { useMainColor } from "../../../../hooks/useSetMainColor"
import { Theme } from "../../../../utils/theme/theme"


//  Images
/// Hero
import heroPng from "../../../../assets/images/USMobile/System/DashboardHero.png"
import heroWebp from "../../../../assets/images/USMobile/System/DashboardHero.webp"

import diagramPng from "../../../assets/images/USMobile/System/Diagram.png"
import diagramWebp from "../../../assets/images/USMobile/System/Diagram.webp"

/// Footer
import systemPng from "../../../assets/images/Footer/System.png"
import systemWebp from "../../../assets/images/Footer/System.webp"
import matrixPng from "../../../assets/images/Footer/Matrix.png"
import matrixWebp from "../../../assets/images/Footer/Matrix.webp"
import starsFooterPng from "../../../assets/images/Footer/Stars.png"
import starsFooterWebp from "../../../assets/images/Footer/Stars.webp"
import FooterCards from "../../../../components/cards/layouts/FooterCards"
import Font from "../../../../utils/fonts/Font"
import Grid from "../../../../utils/grids/Grid"
import Sidelines from "../../../../utils/sidelines/Sidelines"
import Spacer from "../../../../utils/spacer/Spacer"
import Container from "../../../../components/containers/Container"
import { HeroVignette } from "../../../../components/vignettes/Vignettes"
import { useIntroTransition } from "../../../../hooks/useHeroTransition"
import DashboardProduction from "./segments/DashboardProduction"
import DashboardIntroduction from "./segments/DashboardIntroduction"
import DashboardProcess from "./segments/DashboardProcess"
import { DocumentSizeProvider } from "../../../../hooks/useDimensionSize"
import DashboardContext from "./segments/DashboardContext"

const Dashboard: React.FC = () => {
  const theme: Theme = useTheme()
  const [color, setColor] = useMainColor()
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
        <DashboardIntroduction color={color} />
        <DashboardContext />
        <DashboardProcess />
        <DashboardProduction color={theme.text.secondary} />
        {/* 
        <DashRequierements />
        <DashProduction color={theme.legend} />
        <Spacer contained height={64} />
        <Vignettes
        big
        width
        height={576}
        alt='Example of a user journey for the Starter Kit activation feature, with its backend and business rules'
        background='#EEFAF4'
        src={[diagramPng, diagramWebp]}
        />
        <DashDesigns color={color} />
        <DashLibrary />
        <Spacer contained height={80} />
      <FooterCards content={CONTENT.FOOTER} /> */}
      </div>
    </DocumentSizeProvider>
  )
}

export default Dashboard

// function createContent(theme: Theme) {
  //   return {
    //     FOOTER: [
      //       {
        //         key: "1",
        //         reverse: true,
        //         title: { color: theme.text, value: "Previous" },
        //         background: {
//           color: theme.usmobile.background,
//           hover: theme.usmobile.hover,
//         },
//         // status: "loading",
//         src: [systemPng, systemWebp],
//         alt: "I'm an alt ",
//         path: "/",
//       },
//       {
//         key: "2",
//         // reverse: false,
//         title: { color: theme.text, value: "Random" },
//         background: { color: theme.grey, hover: theme.hover },
//         // status: "loading",
//         src: [starsFooterPng, starsFooterWebp],
//         alt: "I'm an alt ",
//         path: "/",
//       },
//       {
//         key: "3",
//         // reverse: false,
//         title: { color: theme.text, value: "Next" },
//         background: {
//           color: theme.usmobile.background,
//           hover: theme.usmobile.hover,
//         },
//         // status: "stop",
//         src: [matrixPng, matrixWebp],
//         alt: "I'm an alt ",
//         path: "/",
//       },
//     ],
//   }
// }

