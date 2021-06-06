import { GroupedContentType } from "../../components/cards/layouts/GroupedCards"

import frame36Png from "../../assets/images/Frameio/36.png"
import frame36Webp from "../../assets/images/Frameio/36.webp"
import frame37Png from "../../assets/images/Frameio/37.png"
import frame37Webp from "../../assets/images/Frameio/37.webp"
import { FourImagesType } from "../../components/devices/layouts/DragMobileFour"
import { CardPropsType } from "../../components/cards/Card"
//
import phone01Png from "../../assets/images/USMobile/PhoneHomepage/phone01.png"
import phone01Webp from "../../assets/images/USMobile/PhoneHomepage/phone01.webp"
import phone02Png from "../../assets/images/USMobile/PhoneHomepage/phone02.png"
import phone02Webp from "../../assets/images/USMobile/PhoneHomepage/phone02.webp"
import phone03Png from "../../assets/images/USMobile/PhoneHomepage/phone03.png"
import phone03Webp from "../../assets/images/USMobile/PhoneHomepage/phone03.webp"
import phone04Png from "../../assets/images/USMobile/PhoneHomepage/phone04.png"
import phone04Webp from "../../assets/images/USMobile/PhoneHomepage/phone04.webp"
import brandingPng from "../../assets/images/USMobile/Branding/Branding.png"
import brandingWebp from "../../assets/images/USMobile/Branding/Branding.webp"
import matrixPng from "../../assets/images/USMobile/Matrix/Matrix.png"
import matrixWebp from "../../assets/images/USMobile/Matrix/Matrix.webp"
import systemPng from "../../assets/images/USMobile/System/System.png"
import systemWebp from "../../assets/images/USMobile/System/System.webp"

type IntroductionType = { GRPD_CARD: GroupedContentType }
type USMWorkType = {
	MOBILE_FOUR: FourImagesType
	CARD_BRANDING: CardPropsType
	CARD_MATRIX: CardPropsType
	CARD_SYSTEM: CardPropsType
}

////////////////////////////////////////////////////////////////////////////////

const INTRODUCTION: IntroductionType = {
	GRPD_CARD: [
		{
			key: 1,
			src: [frame37Png, frame37Webp],
			alt: "test 1",
			tag: { value: "Product design", color: "frameio" },
			title: { color: "white", value: "Frame.io 3.7" },
			background: "transparent",
			href: "https://blog.frame.io/2020/08/25/frameio-v3-7/",
		},
		{
			key: 2,
			src: [frame36Png, frame36Webp],
			alt: "test 2",
			tag: { value: "Product design", color: "frameio" },
			title: { color: "white", value: "Frame.io 3.6" },
			href: "https://blog.frame.io/2020/08/25/frameio-v3-6/",
		},
	],
}

const USMWORK: USMWorkType = {
	MOBILE_FOUR: [
		{ src: [phone01Png, phone01Webp], alt: "Test 1", key: 1 },
		{ src: [phone02Png, phone02Webp], alt: "Test 2", key: 2 },
		{ src: [phone03Png, phone03Webp], alt: "Test 3", key: 3 },
		{ src: [phone04Png, phone04Webp], alt: "Test 4", key: 4 },
	],
	CARD_BRANDING: {
		src: [brandingPng, brandingWebp],
		alt: "Branding image for US Mobile",
		tag: { value: "Design system, UI, Motion Design", color: "usmobile" },
		path: "",
		paddingB: 144,
		background: "usmobile",
	},
	CARD_MATRIX: {
		src: [matrixPng, matrixWebp],
		alt: "test 2",
		tag: { value: "Value tag 2", color: "usmobile" },
		path: "",
		paddingB: 80,
		background: "usmobile",
	},
	CARD_SYSTEM: {
		src: [systemPng, systemWebp],
		alt: "test 2",
		tag: { value: "Value tag 2", color: "usmobile" },
		path: "",
		paddingB: 120,
		background: "usmobile",
	},
}

const HOMEPAGE_CONTENT = {
	INTRODUCTION,
	USMWORK,
}

export default HOMEPAGE_CONTENT
