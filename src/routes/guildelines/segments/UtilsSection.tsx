import React from "react"
import { useTheme } from "react-jss"
// import useDarkMode from "use-dark-mode"
import Container from "../../../components/containers/Container"
import { useWindowSize } from "../../../hooks/useWindowSize"
import Font from "../../../utils/fonts/Font"
import Spacer from "../../../utils/spacer/Spacer"
import { Theme } from "../../../utils/theme/theme"

interface ColorSwatchType {
  color: string
  name: string
  value: string
  gradient?: Boolean
}

const ColorSwatch: React.FC<ColorSwatchType> = (props) => {
  const theme: Theme = useTheme()
  const { color, name, gradient, value } = props

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          width: "100%",
          height: 64,
          background: color,
          transition: "background .15s ease",
        }}
      ></div>
      <Spacer height={8} />
      <div>
        <Font type='text'>
          {name}
          <span
            style={
              gradient
                ? {
                  lineHeight: "24px",
                  margin: "6px 0px 2px",
                  display: "block",
                  color: theme.text.secondary,
                  fontWeight: "normal"
                }
                : {
                  display: "block",
                  color: theme.text.secondary,
                  fontWeight: "normal"
                }
            }
          >
            {value}
          </span>
        </Font>
      </div>
      <Spacer height={16} />
    </div>
  )
}

const UtilsSection: React.FC = () => {
  const theme: Theme = useTheme()
  const darkMode = false/*useDarkMode()*/
  const window = useWindowSize()
  const spacer = <Spacer height={8} />

  let colorGrid = null
  switch (true) {
    case window.width > 991:
      colorGrid = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        columnGap: "32px",
      }
      break
    case window.width > 767:
      colorGrid = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        columnGap: "32px",
      }
      break
    case window.width > 575:
      colorGrid = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        columnGap: "24px",
      }
      break
    default:
      colorGrid = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        columnGap: "16px",
      }
      break
  }

  return (
    <>
      <Container>
        <Font type='legend' >
          Spacings
        </Font>
        {/* Invisible one */}
        <Spacer height={8} />

        {/* List of visible ones */}
        <Spacer display height={8} />
        {spacer}
        <Spacer display height={16} />
        {spacer}
        <Spacer display height={24} />
        {spacer}
        <Spacer display height={32} />
        {spacer}
        <Spacer display height={40} />
        {spacer}
        <Spacer display height={64} />
        {spacer}
        <Spacer display height={80} />
        {spacer}
        <Spacer display height={104} />
        {spacer}
        <Spacer display height={184} />

        {/* New section */}
        <Spacer height={32} />
        <Font type='legend'>
          Colors
        </Font>
        <Spacer height={24} />
        <div style={colorGrid}>
          <ColorSwatch
            color={theme.text.primary}
            name='Text'
            value={darkMode/*darkMode.value*/ ? "#E9E9E9" : "#191919"}
          />
          <ColorSwatch
            color={theme.text.secondary}
            name='Legend'
            value={darkMode/*darkMode.value*/ ? "#878888" : "#757575"}
          />
          <ColorSwatch
            color={theme.background.hover}
            name='Hover'
            value={darkMode/*darkMode.value*/ ? "#414141" : "#E7E7E7"}
          />
          <ColorSwatch
            color={theme.background.basic}
            name='Grey'
            value={darkMode/*darkMode.value*/ ? "#1C1C1C" : "#F3F3F3"}
          />
          <ColorSwatch
            color={theme.text.hover}
            name='Main'
            value={darkMode/*darkMode.value*/ ? "#6946BA" : "#00BAFF"}
          />
          <ColorSwatch
            color={theme.text.active}
            name='Secondary'
            value={darkMode/*darkMode.value*/ ? "#500BF1" : "#6A78FF"}
          />
          <ColorSwatch
            color={theme.text.hero}
            gradient
            name='Gradient'
            value="$Secondary to $Main"
          />
          <ColorSwatch
            color={theme.background.tint}
            name='Tint'
            value={darkMode/*darkMode.value*/ ? "#2C292E" : "#F4F6F9"}
          />
        </div>
        {/* <Spacer height={32} />
        <Tooltip value='This is a tooltip test!!' /> */}
      </Container>
    </>
  )
}

export default UtilsSection
