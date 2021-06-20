import { VignetteProps } from "../../../components/vignettes/Vignettes"
import { DevicesMixed } from "../../../components/devices/layouts/GroupedMobileBrowser"
import { FooterContentType } from "../../../components/cards/layouts/FooterCards"
import { FiveImagesType } from "../../../components/devices/layouts/DragFramelessFive"

import desktopDash01Png from "../../../assets/images/USMobile/System/desk-dashboard-01.png"
import desktopDash01Webp from "../../../assets/images/USMobile/System/desk-dashboard-01.webp"
import desktopDash02Png from "../../../assets/images/USMobile/System/desk-dashboard-02.png"
import desktopDash02Webp from "../../../assets/images/USMobile/System/desk-dashboard-02.webp"
import mobileDash01Png from "../../../assets/images/USMobile/System/mobile-dashboard-01.png"
import mobileDash01Webp from "../../../assets/images/USMobile/System/mobile-dashboard-01.webp"
import mobileDash02Png from "../../../assets/images/USMobile/System/mobile-dashboard-02.png"
import mobileDash02Webp from "../../../assets/images/USMobile/System/mobile-dashboard-02.webp"
import desktopDash04Png from "../../../assets/images/USMobile/System/desk-dashboard-04.png"
import desktopDash04Webp from "../../../assets/images/USMobile/System/desk-dashboard-04.webp"
import desktopDash05Png from "../../../assets/images/USMobile/System/desk-dashboard-05.png"
import desktopDash05Webp from "../../../assets/images/USMobile/System/desk-dashboard-05.webp"
import mobileDash04Png from "../../../assets/images/USMobile/System/mobile-dashboard-04.png"
import mobileDash04Webp from "../../../assets/images/USMobile/System/mobile-dashboard-04.webp"
import mobileDash05Png from "../../../assets/images/USMobile/System/mobile-dashboard-05.png"
import mobileDash05Webp from "../../../assets/images/USMobile/System/mobile-dashboard-05.webp"
import systemPng from "../../../assets/images/Footer/System.png"
import systemWebp from "../../../assets/images/Footer/System.webp"
import matrixPng from "../../../assets/images/Footer/Matrix.png"
import matrixWebp from "../../../assets/images/Footer/Matrix.webp"
import starsFooterPng from "../../../assets/images/Footer/Stars.png"
import starsFooterWebp from "../../../assets/images/Footer/Stars.webp"
import Library01Png from "../../../assets/images/USMobile/System/Library-01.png"
import Library01Webp from "../../../assets/images/USMobile/System/Library-01.webp"
import Library02Png from "../../../assets/images/USMobile/System/Library-02.png"
import Library02Webp from "../../../assets/images/USMobile/System/Library-02.webp"
import App01Png from "../../../assets/images/USMobile/System/App-01.png"
import App02Png from "../../../assets/images/USMobile/System/App-02.png"
import App03Png from "../../../assets/images/USMobile/System/App-03.png"
import App04Png from "../../../assets/images/USMobile/System/App-04.png"
import App05Png from "../../../assets/images/USMobile/System/App-05.png"
import App01Webp from "../../../assets/images/USMobile/System/App-01.webp"
import App02Webp from "../../../assets/images/USMobile/System/App-02.webp"
import App03Webp from "../../../assets/images/USMobile/System/App-03.webp"
import App04Webp from "../../../assets/images/USMobile/System/App-04.webp"
import App05Webp from "../../../assets/images/USMobile/System/App-05.webp"

type DesignsType = {
  GRP_DEVICES_FIRST: DevicesMixed
  GRP_DEVICES_SECOND: DevicesMixed
}

type LibraryType = {
  IMAGE_ONE: VignetteProps
  IMAGE_TWO: VignetteProps
  FRAMELESSFIVE: FiveImagesType
}

const DESIGNS: DesignsType = {
  GRP_DEVICES_FIRST: {
    browser: [
      { src: [desktopDash01Png, desktopDash01Webp], alt: "Test 1", key: 1 },
      { src: [desktopDash02Png, desktopDash02Webp], alt: "Test 2", key: 2 },
    ],
    mobile: [
      { src: [mobileDash01Png, mobileDash01Webp], alt: "Test 1", key: 3 },
      { src: [mobileDash02Png, mobileDash02Webp], alt: "Test 2", key: 4 },
    ],
  },
  GRP_DEVICES_SECOND: {
    browser: [
      { src: [desktopDash04Png, desktopDash04Webp], alt: "Test 1", key: 1 },
      { src: [desktopDash05Png, desktopDash05Webp], alt: "Test 2", key: 2 },
    ],
    mobile: [
      { src: [mobileDash04Png, mobileDash04Webp], alt: "Test 1", key: 3 },
      { src: [mobileDash05Png, mobileDash05Webp], alt: "Test 2", key: 4 },
    ],
  }
}

const LIBRARY: LibraryType = {
  IMAGE_ONE: { src: [Library01Png, Library01Webp], alt: "Regularly updated and documented design library, constantly updated" },
  IMAGE_TWO: { src: [Library02Png, Library02Webp], alt: "Guidelines applied to the mobile profiles" },
  FRAMELESSFIVE: [
    { src: [App01Png, App01Webp], alt: "", key: 1 },
    { src: [App02Png, App02Webp], alt: "", key: 2 },
    { src: [App03Png, App03Webp], alt: "", key: 3 },
    { src: [App04Png, App04Webp], alt: "", key: 4 },
    { src: [App05Png, App05Webp], alt: "", key: 5 },
  ]
}

const FOOTER: FooterContentType = [
  {
    key: 1,
    reverse: true,
    title: { value: "Previous" },
    src: [systemPng, systemWebp],
    alt: "I'm an alt ",
    background: "usmobile",
    path: "/",
  },
  {
    key: 2,
    title: { value: "Random" },
    src: [starsFooterPng, starsFooterWebp],
    alt: "I'm an alt ",
    path: "/",
  },
  {
    key: 3,
    title: { value: "Next" },
    background: "usmobile",
    src: [matrixPng, matrixWebp],
    alt: "I'm an alt ",
    path: "/",
  },
]

const DAHSBOARD_CONTENT = {
  DESIGNS,
  LIBRARY,
  FOOTER
}

export default DAHSBOARD_CONTENT