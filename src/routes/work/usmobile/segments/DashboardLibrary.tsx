import React, { useMemo } from "react"
import Container from "../../../../components/containers/Container"
import Column from "../../../../components/containers/Column"
import { Vignette } from "../../../../components/vignettes/Vignettes"
import DragFramelessFive from "../../../../components/devices/layouts/DragFramelessFive"
import Spacer from "../../../../utils/spacer/Spacer"
import Font from "../../../../utils/fonts/Font"
import DAHSBOARD_CONTENT from "../Dashboard.content"

const DashLibrary: React.FC = () => {
  const content = useMemo(() => DAHSBOARD_CONTENT, [])
  return (
    <>
      <Container>
        <Spacer height={104} />
        <Column spacer="third">
          <Font type='h4'>Design library system for desktop & mobile</Font>
          <Font type='text'>
            I created a Design Library of fully responsive components for US
            Mobile to improve the pace of front-end and design deployment.
          </Font>
        </Column>
        <Spacer height={24} />
      </Container>
      <Vignette {...content.LIBRARY.IMAGE_ONE} />
      <Spacer contained height={40} />
      <Vignette {...content.LIBRARY.IMAGE_TWO} />
      <Spacer contained height={80} />
      <Container>
        <Font type='h4'>A standalone app for the App Store</Font>
      </Container>
      <Spacer contained height={40} />
      <DragFramelessFive images={content.LIBRARY.FRAMELESSFIVE} />
      <Container>
        <Spacer height={104} />
        <Column spacer="third">
          <Font type='text'>
            We are only half-way through the deployment of our solution, but
            already, the team is more excited to develop new features onto it,
            using these new technologies that work.˝
          </Font>
          <Font type='text'>
            Customers are very responsive and pleased by the newly gained
            clarity of their dashboard, the new features, and the level of
            customization they can add to it.
          </Font>
          <Font type='text'>Thanks for reading.</Font>
        </Column>
        <Font type='h3'>
          <span role='img' aria-label='cheers'>
            ✌🏽
          </span>
        </Font>
      </Container>
    </>
  )
}

export default DashLibrary
