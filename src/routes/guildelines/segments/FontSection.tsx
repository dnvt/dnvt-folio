import React from "react"
import { useTheme } from "react-jss"
import Column from "../../../components/containers/Column"
import Container from "../../../components/containers/Container"
import { useWindowSize } from "../../../hooks/useWindowSize"
import Font from "../../../utils/fonts/Font"
import Spacer from "../../../utils/spacer/Spacer"
import { Theme } from "../../../utils/theme/theme"


const FontSection: React.FC = () => {
  const theme: Theme = useTheme()
  const window = useWindowSize()

  let spacerWidth: number | "100%" = "100%"
  if (window.width > 991) spacerWidth = 448
  if (window.width > 1359) spacerWidth = 544

  return (
    <>
      {/* <div style={{ position: "relative", marginTop: -120, marginBottom: -640, transform: "translateX(0px)" }}>
        <Font type="hero">Hey world</Font>
      </div> */}
      <Container>
        <Spacer height={64} />
        <Font type='h1'>
          H1 Heading. <br /> This is my H1 and I tried to make it a long long
          long ass title. Is this too long?
        </Font>
        <Spacer height={40} />
        <Font type='h2'>H2 Section</Font>
        <Spacer height={40} />
        <Font type='h3'>H3 Title. This is a long long long ass title.</Font>
        <Font type='h4'>H4 Subtitle. This is a long long long ass title.</Font>
        <Font type='h5' style={{ color: theme.text.hover }}>
          H5 Tags. This is a long long long tag.
        </Font>
        <Column spacer="third">
          <Font type='text'>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Donec sed odio dui. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Donec id elit non mi porta gravida
            at eget metus. Aenean lacinia bibendum nulla sed consectetur. Duis
            mollis, est non commodo luctus, nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo,
            tortor mauris condimentum nibh, ut fermentum massa justo sit amet
            risus.
          </Font>
        </Column>
        <Spacer height={40} />
        <Font type='h5' style={{ color: theme.text.hover }}>
          H5 Tags. This is a long long long tag.
        </Font>
        <Column grid >
          <div>
            <Font type='text'>
              Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus
              commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
              amet risus. Donec sed odio dui. Donec id elit non mi porta gravida at
              eget metus. Praesent commodo cursus magna, vel scelerisque nisl
              consectetur et. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus
              commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
              amet risus.
            </Font>
          </div>
          <div>
            <Font type='text' style={{ width: spacerWidth }}>
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
              elit non mi porta gravida at eget metus. Donec ullamcorper nulla non
              metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.
              Cras mattis consectetur purus sit amet fermentum. Sed posuere
              consectetur est at lobortis.
            </Font>
          </div>
        </Column>
      </Container>
    </>
  )
}

export default FontSection
