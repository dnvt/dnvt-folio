import React from "react"
import Column from "../../../../components/containers/Column"
import Container from "../../../../components/containers/Container"
import Font from "../../../../utils/fonts/Font"
import NumberedList from "../../../../utils/fonts/NumberedList"
import Spacer from "../../../../utils/spacer/Spacer"

const DashRequirements: React.FC = () => {
  return (
    <Container>
      <Spacer height={64} />
      <Font type='h4'>Business requirements</Font>
      <Column spacer="third">
        <NumberedList number={1}>
          <Font type='text'>
            A dashboard that can easily support new features and future business
            requirements, both technically and visually (think family plans,
            usage history, IoT…).
          </Font>
        </NumberedList>
        <NumberedList number={2}>
          <Font type='text'>
            Updated with the latest branded UI components.
          </Font>
        </NumberedList>
        <NumberedList number={3}>
          <Font type='text'>
            Designed as a standalone product: everything needed to be a US
            Mobile customer–from ordering your Starter Kit, activating it, to
            managing your phone line– should be included. That way, it can be
            deployed to the Android and App Stores.
          </Font>
        </NumberedList>
        <NumberedList number={4}>
          <Font type='text'>
            Built to work with no connectivity–so the customer can always keep
            track of what’s left.We decided to go with PWA technology.
          </Font>
        </NumberedList>
      </Column>
    </Container>
  )
}

export default DashRequirements
