import React from "react"
import Font from "../../../utils/fonts/Font"

interface DescriptionType {
  width: number
  valueMedium: string[]
  valueSmall: string[]
  valueLarge: string[]
}

const Description: React.FC<DescriptionType> = (props) => {
  const { width, valueMedium, valueSmall, valueLarge } = props
  const element = setElementValue()

  return (
    <div
      style={{
        maxWidth: "100%",
        height: "auto",
        padding: "0",
        margin: "0 auto",
      }}
    >
      <Font type='legend'>{element} </Font>
    </div>
  )

  //

  function setElementValue() {
    let element: any = []

    let value
    if (width > 1359) value = valueLarge
    if (width > 767) value = valueMedium
    else value = valueSmall

    value.forEach((el) => {
      element!.push(
        <div key={el}>
          {el}
          <br />
        </div>
      )
    })

    return element
  }
}

export default Description