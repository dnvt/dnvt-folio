import React from "react"
import { useTheme } from "react-jss"
import { Theme } from "../theme/theme"
import Font from "./Font"
import FontStyle from "./Font-style"

const NumberedList: React.FC<{ number: number }> = (props) => {
  const theme: Theme = useTheme()
  const classes = FontStyle({ ...props, theme })

  const { number, children } = props

  return (
    <div style={{ position: "relative" }}>
      <div className={classes.listNumber}>
        <Font type='h5'>{number + "."}</Font>
      </div>
      {children}
    </div>
  )
}

export default NumberedList
