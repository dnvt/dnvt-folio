import React from "react"
import { useWindowSize } from "../../hooks/useWindowSize"
import Font from "../../utils/fonts/Font"
import Spacer from "../../utils/spacer/Spacer"

const Legend: React.FC<{ alt: string }> = ({ alt }) => {
 const window = useWindowSize()

 return (<>
  <Spacer height={window.width > 992 ? 16 : 8} />
  <Font type='legend'>{alt}</Font>
 </>)
}

export default Legend