import { FooterContentType } from "../../../components/cards/layouts/FooterCards"
import { ProjectColor } from "../../../components/cards/Card"

export type ProjectsProps = {
  type: "coverjs" | "branding" | "matrix" | "norse" | "elastic" | "waste" | "kipfit" | "mimi" | "stars" | "airbus" | "siemens" | "telekom"
}

export type ListProjects = {
  coverjs: ProjectsContent
  branding: ProjectsContent
  matrix: ProjectsContent
  norse: ProjectsContent
  elastic: ProjectsContent
  kipfit: ProjectsContent
  waste: ProjectsContent
  mimi: ProjectsContent
  stars: ProjectsContent
  airbus: ProjectsContent
  siemens: ProjectsContent
  telekom: ProjectsContent
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
