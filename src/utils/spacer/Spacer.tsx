import { useTheme } from "react-jss"
import { useGridVisibility } from "../../hooks/useGridVisibility"
import { Theme } from "../theme/theme"
import Container from "../../containers/Container"
import SpacerStyle from "./Spacer-style"

// TODO
// Change spacer value to an array (which will contain numbers and 100% > strings)

type HeightType = 8 | 16 | 24 | 32 | 40 | 64 | 80 | 104 | 184 | "100%"
interface SpacerType {
  height: HeightType | string
  width?: number | string
  bg?: string
  display?: Boolean
  contained?: Boolean
  borderLess?: Boolean
}

function Spacer(props: SpacerType): JSX.Element {
  const theme: Theme = useTheme()
  const [visibility] = useGridVisibility()

  const classes = SpacerStyle({ ...props, theme })
  const { borderLess, width, height, display, bg, contained } = props

  let heightValueDisplayed: JSX.Element
  let spacerComponent: JSX.Element = setComponentToTransparent()

  // Need to change the value's padding 
  // depending on the spacers' height
  if (height > 8) setClassToValue(classes.smallNumber)
  if (height > 16) setClassToValue(classes.number)
  if (height > 24) setClassToValue(classes.midNumber)
  if (height > 32) setClassToValue(classes.bigNumber)

  if (visibility || display) setComponentToVisible()
  if (contained) return <Container>{spacerComponent}</Container>

  return <>{spacerComponent}</>

  // 

  function setClassToValue(className?: string): void {
    heightValueDisplayed = <div className={className}>{height}</div>
  }

  function setComponentToTransparent(): JSX.Element {
    return (
      <div
        style={{ width, height, background: "transparent" }}
        className={classes.hidding}
      ></div>
    )
  }

  function setComponentToVisible(): void {
    spacerComponent = (
      <div
        style={{ width, height, background: bg }}
        className={borderLess ? classes.fontSpacer : classes.spacer}
      >
        {heightValueDisplayed}
      </div>
    )
  }
}

export default Spacer
