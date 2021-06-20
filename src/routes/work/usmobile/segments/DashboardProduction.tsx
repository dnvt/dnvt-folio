import React from "react"
import Column from "../../../../components/containers/Column"
import Container from "../../../../components/containers/Container"
import Device from "../../../../components/devices/Device"
import Spacer from "../../../../utils/spacer/Spacer"
import Font from "../../../../utils/fonts/Font"
import notionPng from "../../../../assets/images/USMobile/System/Notion.png"
import notionWebp from "../../../../assets/images/USMobile/System/Notion.webp"

////////////////////////////////////////////////////////////////////////////////

const DashboardProduction: React.FC<{ color: string }> = ({ color }) => {
  return (
    <Container>
      <Spacer height={64} />
      <Font type='h4'>Production steps</Font>
      <Column spacer="third">
        <Font type='h5' style={{ color: color }}>
          Dashboard MVP 1
        </Font>
        <Font type='text'>
          Release the same amount of features available in the legacy dashboard
          so it can be quickly replaced and tested rapidly.
        </Font>
        <Spacer height={16} />
        <Font type='h5' style={{ color: color }}>
          Dashboard MVP 2
        </Font>
        <Font type='text'>
          Release enough features to get a standalone app available on the App
          Store.
        </Font>
      </Column>
      <Spacer height={32} />
      <Device
        type="browserless"
        src={[notionPng, notionWebp]}
        alt='Each user story and design specs are always documented (here, in Notion).'
      />
      <Spacer height={24} />
      <Font type='legend'>
        Each user story and design specs are always documented (here, in
        Notion).
      </Font>
    </Container>
  )
}

export default DashboardProduction
