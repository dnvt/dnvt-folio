import React from "react"
import { Vignette } from "../../../../components/vignettes/Vignettes"
import SpacerFortyHalf from "../../../../utils/spacer/variations/SpacerFortyHalf"
import { ImageProps } from "../ProjectsProps"

const ListofImages: React.FC<{ images: ImageProps[] }> = ({ images }) => {
  const rows = images.map(ModuleImage)
  return (
    <>
      <SpacerFortyHalf />
      {rows}
    </>
  )
}

const ModuleImage: React.FC<ImageProps> = ({ key, src, alt }) => {
  return (
    <div key={key}>
      <SpacerFortyHalf />
      <Vignette src={src} alt={alt} />
    </div>
  )
}

export default ListofImages
