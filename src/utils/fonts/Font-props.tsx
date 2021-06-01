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
    color: string
    margin?: string
    width?: string
  }
  animation?: Boolean
}

export type StyleProps = {
  color: string
  margin?: string
  width?: string
}

export type FontPaddingProps = {
  type: FontTypes,
}