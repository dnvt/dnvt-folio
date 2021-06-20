import { FooterContentType } from "../../components/cards/layouts/FooterCards"
import { ProjectColor } from "../../components/cards/Card"

export type ProjectsProps = {
  type: "coverjs" | "branding" | "matrix"
}

export type ListProjects = {
  coverjs: ProjectsContent
  branding: ProjectsContent
  matrix: ProjectsContent
}

export type ProjectsContent = {
  HERO: HeroProps
  INTRO: IntroType
  HEROBACKGROUND?: string
  IMAGES: ImageProps[]
  THANKS: ParagraphProps[]
  FOOTER: FooterContentType
}

export type IntroType = {
  section: string
  title: {
    color?: ProjectColor
    value: string
  }
  typeOfProject: {
    color?: ProjectColor
    value: string
  }
  paragraph: ParagraphProps[]
  link?: string
  button?: string
}

export type ImageProps = {
  key: number
  src: [string, string]
  alt: string
}

export type ParagraphProps = {
  key: number
  paragraph: string
}

export type HeroProps = {
  images: [string, string]
  backgroundColor?: string
}
