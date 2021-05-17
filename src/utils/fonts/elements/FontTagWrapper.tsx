import React from "react"
import { FontTagWrapperProps, FontTypes, StyleProps } from "../Font-props"
import FontPadding from "./FontPadding"

const FontTagWrapper: React.FC<FontTagWrapperProps> = (props): JSX.Element => {
  const { type, style, children } = props

  let fontComponent: JSX.Element = intiateFontComponent(type)
  let wrappedTag: JSX.Element | null = addTagWrapper(type, style)

  return <>{wrappedTag}</>

  //

  function addTagWrapper(type: FontTypes, style?: StyleProps) {
    switch (type) {
      case "h1": return <h1 style={style}>{fontComponent}</h1>
      case "h2": return <h2 style={style}>{fontComponent}</h2>
      case "h3": return <h3 style={style}>{fontComponent}</h3>
      case "h4": return <h4 style={style}>{fontComponent}</h4>
      case "h5": return <h5 style={style}>{fontComponent}</h5>
      case "text": return <p className={type} style={style}>{fontComponent}</p>
      case "legend": return <div className={type} style={style}>{fontComponent}</div>
      case "menu": return <div className={type} style={style}>{fontComponent}</div>
      case "tooltip": return <div className={type} style={style}>{fontComponent}</div>
      case "hero": return <div className={type} style={style}>{fontComponent}</div>
      default: return null
    }
  }

  function intiateFontComponent(type: FontTypes) {
    return <FontPadding type={type}>{type === "h3" ? <span>{children}</span> : children}</FontPadding>

  }
}

export default FontTagWrapper