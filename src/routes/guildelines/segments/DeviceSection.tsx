import React, { useMemo } from "react"
import DragFramelessFive from "../../../components/devices/layouts/DragFramelessFive"
import DragMobileFour from "../../../components/devices/layouts/DragMobileFour"
import GroupedMobileBrowser from "../../../components/devices/layouts/GroupedMobileBrowser"
import Spacer from "../../../utils/spacer/Spacer"
import CONTENT_APP from "../Guidelines.content"

const DeviceSection: React.FC = () => {
  const content = useMemo(() => CONTENT_APP, [])

  return (
    <>
      <Spacer contained height={40} />
      <DragMobileFour images={content.MOBILE_FOUR} />

      <Spacer contained height={80} />
      <GroupedMobileBrowser images={content.GROUPED_DEVICES} />

      <Spacer contained height={80} />
      <DragFramelessFive images={content.FRAMELESS_FIVE_EMPTY} />
    </>
  )
}

export default DeviceSection