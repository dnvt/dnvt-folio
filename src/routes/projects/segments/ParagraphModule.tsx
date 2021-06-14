import React from "react"
import Font from "../../../utils/fonts/Font"
import { ParagraphProps } from "../ProjectsProps"

const ParagraphModule: React.FC<ParagraphProps> = ({ key, paragraph }) => {
  return (
    <Font key={key} type='text'>
      {paragraph}
    </Font>
  )
}

export default ParagraphModule
