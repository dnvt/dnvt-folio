/**
 * Welcome to @dnvt/Vertical!
 */

import { useTheme } from "react-jss"
import { useWindowSize } from "../../hooks/useWindowSize"
import { Theme } from "../theme/theme"
import Container from "../../components/containers/Container"
import VerticalStyle from "./Vertical-style"

////////////////////////////////////////////////////////////////////////////////

const Vertical: React.FC = (props) => {
  const theme: Theme = useTheme()
  const window = useWindowSize()
  const classes = VerticalStyle({ ...props, theme })

  const breakpoints = [575, 767, 991, 1359]
  let rowNumber = 12

  switch (true) {
    case window.width! < breakpoints[0]:
      rowNumber = 1
      break
    case window.width! < breakpoints[1]:
      rowNumber = 2
      break
    case window.width! < breakpoints[2]:
      rowNumber = 6
      break
    default:
      rowNumber = 12
      break
  }

  const rowArray = []

  for (let index = 0; index < rowNumber; index++) {
    rowArray.push(<div key={index}></div>)
  }

  return (
    <div className={classes.Vertical}>
      <Container height>
        <div className={classes.Column}>{rowArray}</div>
      </Container>
    </div>
  )
}

export default Vertical
