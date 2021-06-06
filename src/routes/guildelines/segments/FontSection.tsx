import React, { useMemo } from "react"
import { useTheme } from "react-jss"
import Container from "../../../components/containers/Container"
import { useWindowSize } from "../../../hooks/useWindowSize"
import Font from "../../../utils/fonts/Font"
import Spacer from "../../../utils/spacer/Spacer"
import { Theme } from "../../../utils/theme/theme"
import Description from "./Description"
// import { parse } from "query-string"


const FontSection: React.FC = () => {
  const theme: Theme = useTheme()
  const window = useWindowSize()

  const DESCRIPTION = useMemo(() => DESC, [])
  // const animate = parse(props.location.search).fontAnimation

  return (
    <>
      {window.width > 767 && (
        <>
          <div
            style={{
              position: "relative",
              height: "1600px",
              marginTop: "-280px",
              marginBottom: "-720px",
              padding: "120px -80px",
              overflow: "hidden"
            }}
          >
            {/* <FontHero animate={animate} value='Hello World!' /> */}
            <Font type="hero">Hello Wold</Font>
          </div>
        </>
      )}
      <Container>
        <Spacer height={64} />
        <Font type='h1'>
          H1 Heading. <br /> This is my H1 and I tried to make it a long long
          long ass title. Is this too long?
        </Font>
        <Description
          width={window.width}
          valueLarge={DESCRIPTION.large.h1}
          valueMedium={DESCRIPTION.medium.h1}
          valueSmall={DESCRIPTION.small.h1}
        />
        <Spacer height={40} />
        <Font type='h2'>H2 Section</Font>
        <Description
          width={window.width}
          valueLarge={DESCRIPTION.large.h2}
          valueMedium={DESCRIPTION.medium.h2}
          valueSmall={DESCRIPTION.small.h2}
        />
        <Spacer height={40} />
        <Font type='h3'>H3 Title. This is a long long long ass title.</Font>
        <Description
          width={window.width}
          valueLarge={DESCRIPTION.large.h3}
          valueMedium={DESCRIPTION.medium.h3}
          valueSmall={DESCRIPTION.small.h3}
        />
        <Spacer height={40} />
        <Font type='h4'>H4 Subtitle. This is a long long long ass title.</Font>
        <Description
          width={window.width}
          valueLarge={DESCRIPTION.large.h4}
          valueMedium={DESCRIPTION.medium.h4}
          valueSmall={DESCRIPTION.small.h4}
        />
        <Spacer height={40} />
        <Font type='h5' style={{ color: theme.text.hover }}>
          H5 Tags. This is a long long long tag.
        </Font>
        <Description
          width={window.width}
          valueLarge={DESCRIPTION.large.h5}
          valueMedium={DESCRIPTION.medium.h5}
          valueSmall={DESCRIPTION.small.h5}
        />
        <Spacer height={40} />
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
        <Font type='text'>
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
          elit non mi porta gravida at eget metus. Donec ullamcorper nulla non
          metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.
          Cras mattis consectetur purus sit amet fermentum. Sed posuere
          consectetur est at lobortis.
        </Font>
        <Font type='text'>
          Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus
          commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
          amet risus. Donec sed odio dui. Donec id elit non mi porta gravida at
          eget metus. Praesent commodo cursus magna, vel scelerisque nisl
          consectetur et. Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus
          commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
          amet risus. Fusce dapibus, tellus ac cursus commodo, tortor mauris
          condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo
          odio, dapibus ac facilisis in, egestas eget quam. Maecenas faucibus
          mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nulla vitae elit libero, a pharetra augue. Integer posuere erat
          a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non
          commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
          elit. Donec id elit non mi porta gravida at eget metus. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum
          nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit
          amet non magna. Fusce dapibus, tellus ac cursus commodo, tortor mauris
          condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta
          sem malesuada magna mollis euismod.
        </Font>
        <Description
          width={window.width}
          valueLarge={DESCRIPTION.large.text}
          valueMedium={DESCRIPTION.medium.text}
          valueSmall={DESCRIPTION.small.text}
        />
      </Container>
    </>
  )
}

const DESC = {
  large: {
    h1: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    h2: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    h3: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    h4: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    h5: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    text: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
  },
  medium: {
    h1: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    h2: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    h3: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    h4: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    h5: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    text: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
  },
  small: {
    h1: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    h2: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    h3: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    h4: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    h5: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
    text: [
      "Hero Font. 1000/1000px",
      "Letter Spacing. -0.02px",
      "Padding. 32px 0px 32px",
    ],
  },
}

export default FontSection
