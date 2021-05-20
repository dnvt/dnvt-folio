import { createUseStyles } from "react-jss"
import { UnderlineProps } from "./Underline"

const UnderlineStyle = createUseStyles({
  Separator: (props: UnderlineProps) => ({
    width: "100%",
    height: "1px",
    opacity: props.opacity,
    marginTop: "-9px",
    transition: "background .12s ease"
  }),
  
  SeparEx: (props: UnderlineProps) => ({
    width: "100%",
    height: "1px",
    opacity: props.opacity,
    marginTop: "-10px",
    transition: "background .12s ease"
  }),
})

export default UnderlineStyle
