import React, { useMemo } from "react"
import Container from "../../../components/containers/Container"
import Footer from "../../../components/navigations/Footer"
import Header from "../../../components/navigations/Header"
import { useWindowSize } from "../../../hooks/useWindowSize"
import Description from "./Description"

const NavigationSection: React.FC = () => {
  const window = useWindowSize()

  const DESCRIPTION = useMemo(() => DESC, [])

  return (
    <>
      <Header positionNotfixed />
      <Container>
        <Description
          width={window.width}
          valueLarge={DESCRIPTION.large.header}
          valueMedium={DESCRIPTION.medium.header}
          valueSmall={DESCRIPTION.small.header}
        />
      </Container>
      <Footer />
      <Container>
        <Description
          width={window.width}
          valueLarge={DESCRIPTION.large.header}
          valueMedium={DESCRIPTION.medium.header}
          valueSmall={DESCRIPTION.small.header}
        />
      </Container>
    </>
  )
}

export default NavigationSection

const DESC = {
  large: {
    header: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    footer: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
  },
  medium: {
    header: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    footer: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
  },
  small: {
    header: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    footer: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
  },
}
