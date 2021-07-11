import React from "react"
import Container from "../../../components/containers/Container"
import Footer from "../../../components/navigations/Footer"
import Header from "../../../components/navigations/Header"
import Spacer from "../../../utils/spacer/Spacer"

const NavigationSection: React.FC = () => {
  return (
    <>
      <Spacer contained height={40} />
      <Header positionNotfixed />
      <Container>
      </Container>
      <Footer />
      <Container>
      </Container>
    </>
  )
}

export default NavigationSection
