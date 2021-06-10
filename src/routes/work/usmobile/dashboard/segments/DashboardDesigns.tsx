import React, { useMemo } from "react"
import Column from "../../../../../components/containers/Column"
import Container from "../../../../../components/containers/Container"
import GroupedMobileBrowser from "../../../../../components/devices/layouts/GroupedMobileBrowser"

import Font from "../../../../../utils/fonts/Font"
import Spacer from "../../../../../utils/spacer/Spacer"
import DAHSBOARD_CONTENT from "../Dashboard.content"

const DashDesigns: React.FC = () => {
  const content = useMemo(() => DAHSBOARD_CONTENT, [])

  return (
    <>
      <Container>
        <Spacer height={64} />
        <Column spacer="third">
          <Font type='h4'>Design and Details</Font>
          <Font type='text'>
            Some detail of screens designed for the dashboard, shown on both
            desktop and mobile mediums.
          </Font>
        </Column>
        <Spacer height={40} />
      </Container>
      <GroupedMobileBrowser images={content.DESIGNS.GRP_DEVICES_FIRST} />
      <Container>
        <Spacer height={80} />
        <Column spacer="third">
          <Font type='h5'>
            e.g. of design decision to help solve a business problem
          </Font>
          <Font type='text'>
            To allow future customer line features, without changing the design
            again intensely, we decided to use horizontal navigation rather than
            a side one. It would be more comfortable at first to display no
            navigation/features and add them up horizontally rather than having
            empty side navigation that would expend only slowly in the future.
          </Font>
        </Column>
        <Spacer height={64} />
      </Container>
      <GroupedMobileBrowser images={content.DESIGNS.GRP_DEVICES_SECOND} />
    </>
  )
}

export default DashDesigns
