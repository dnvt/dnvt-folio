import { useTheme } from "react-jss"
import { useDocumentSize } from "../../hooks/useDimensionSize"
import HorizontalStyle from "./Horizontal-style"
import { Theme } from "../theme/theme"
import { useEffect, useState } from "react"

const Horizontal: React.FC = (props) => {
  const document = useDocumentSize()
  const theme: Theme = useTheme()
  const classes = HorizontalStyle({ ...props, theme })

  const [rowNumber, setRowNumber] = useState(0)
  const rowArray: JSX.Element[] = []

  useEffect(() => {
    if (document.height) setRowNumber(Math.trunc(document.height / 8))
  }, [document.height])

  for (let index = 0; index < rowNumber; index++) {
    rowArray.push(<div key={index} className={classes.Row}></div>)
  }

  return <div className={classes.Horizontal}>{rowArray}</div>
}

export default Horizontal
