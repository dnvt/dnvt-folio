import { useTheme } from "react-jss"
import { Theme } from "../../theme/theme"
import Spacer from "../Spacer"

interface VerticalerType {
  width: number
}

////////////////////////////////////////////////////////////////////////////////

const Verticaler: React.FC<VerticalerType> = (props) => {
  const theme: Theme = useTheme()
  const { width } = props

  return <Spacer borderLess height='100%' width={width} bg={theme.grid.fill} />
}

export default Verticaler
