export type FontTypes =
  | "hero"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "text"
  | "link"
  | "legend"
  | "tooltip"
  | "menu"

export type FontTagWrapperProps = {
  type: FontTypes
  style?: {
    color?: string
    margin?: string
    width?: number | "100%"
    top?: number
    fontWeight?: string
  }
  animation?: {}
}

export type StyleProps = {
  color?: string
  margin?: string
  width?: number | "100%"
}

export type FontPaddingProps = {
  type: FontTypes,
}