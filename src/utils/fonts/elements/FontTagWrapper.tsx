import React from "react"
import { useTheme } from "react-jss"
import { Theme } from "../../theme/theme"
import { FontTagWrapperProps, FontTypes, StyleProps } from "../Font-props"
import FontStyle from "../Font-style"
import HeroStyle from "../Hero-style"
import FontPadding from "./FontPadding"

const FontTagWrapper: React.FC<FontTagWrapperProps> = (props): JSX.Element => {
  const theme: Theme = useTheme()
  const classes = FontStyle({ ...props, theme })
  const classesHero = HeroStyle()
  const { type, animation, style, children } = props

  let wrappedTag: JSX.Element | null = addTagWrapper(type, style)
  let fontComponent: JSX.Element = addPaddingWrapper(type)

  return <>{fontComponent}</>

  //

  function addTagWrapper(type: FontTypes, style?: StyleProps) {
    switch (type) {
      case "h1": return <h1 style={style}>{children}</h1>
      case "h2": return <h2 style={style}>{children}</h2>
      case "h3": return <h3 style={style}><span style={{ borderColor: animation ? style?.color : "transparent" }} className={classes.span}>{children}</span></h3>
      case "h4": return <h4 style={style}>{children}</h4>
      case "h5": return <h5 style={style}>{children}</h5>
      case "text": return <p style={style}>{children}</p>
      case "legend": return <div className={classes.legend} style={style}>{children}</div>
      case "menu": return <div className={classes.menu} style={style}>{children}</div>
      case "link": return <div className={classes.link} style={style}>{children}</div>
      case "tooltip": return <div className={classes.tooltip} style={style}>{children}</div>
      case "hero": return <div className={classesHero.Fontimation} style={style}><div className={classes.hero} style={style}>{children}</div></div>
      default: return null
    }
  }

  function addPaddingWrapper(type: FontTypes) {
    return <FontPadding type={type}>{wrappedTag}</FontPadding>

  }
}

export default FontTagWrapper