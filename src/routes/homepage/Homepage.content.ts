import { GroupedContentType } from "../../components/cards/layouts/GroupedCards"

import frame36Png from "../../assets/images/Frameio/36.png"
import frame36Webp from "../../assets/images/Frameio/36.webp"
import frame37Png from "../../assets/images/Frameio/37.png"
import frame37Webp from "../../assets/images/Frameio/37.webp"
import { FourImagesType } from "../../components/devices/layouts/DragMobileFour"
import { CardPropsType } from "../../components/cards/Card"
import { ThreeCardsContentType } from "../../components/cards/layouts/DragCardThree"

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
import airbusPng from "../../assets/images/Airbus/Airbus.webp"
import airbusWebp from "../../assets/images/Airbus/Airbus.webp"
import siemensPng from "../../assets/images/Siemens/Siemens.webp"
import siemensWebp from "../../assets/images/Siemens/Siemens.webp"
import telekomPng from "../../assets/images/Telekom/Telekom.webp"
import telekomWebp from "../../assets/images/Telekom/Telekom.webp"
import norsePng from "../../assets/images/Norse/Norse.png"
import norseWebp from "../../assets/images/Norse/Norse.webp"
import norseDarkPng from "../../assets/images/Norse/NorseDark.png"
import norseDarkWebp from "../../assets/images/Norse/NorseDark.webp"
import elasticPng from "../../assets/images/Elastic/Elastic.png"
import elasticWebp from "../../assets/images/Elastic/Elastic.webp"
import elasticFullPng from "../../assets/images/Elastic/ElasticFull.png"
import elasticFullWebp from "../../assets/images/Elastic/ElasticFull.webp"
import wastePng from "../../assets/images/Waste/Waste.png"
import wasteWebp from "../../assets/images/Waste/Waste.webp"
import kipfitPng from "../../assets/images/Kipfit/Kipfit.png"
import kipfitWebp from "../../assets/images/Kipfit/Kipfit.webp"
import kipfitDarkPng from "../../assets/images/Kipfit/KipfitDark.png"
import kipfitDarkWebp from "../../assets/images/Kipfit/KipfitDark.webp"
import mimiPng from "../../assets/images/Mimi/Mimi.png"
import mimiWebp from "../../assets/images/Mimi/Mimi.webp"
import starsPng from "../../assets/images/Stars/Stars.png"
import starsWebp from "../../assets/images/Stars/Stars.webp"
import coverPng from "../../assets/images/Coverjs/Coverjs.png"
import coverWebp from "../../assets/images/Coverjs/Coverjs.webp"

type IntroductionType = { GRPD_CARD: GroupedContentType }
type USMWorkType = {
	MOBILE_FOUR: FourImagesType
	CARD_BRANDING: CardPropsType
	CARD_MATRIX: CardPropsType
	CARD_SYSTEM: CardPropsType
}

type SelectedWorkType = {
	GRPD_CARD_FIRST: GroupedContentType
	CARD_LOVE: CardPropsType
	GRPD_CARD_SECOND: GroupedContentType
}

type PlaygroundType = {
	GROUP_ANIM: CardPropsType
	GROUP_COVER: CardPropsType
	GROUP_: CardPropsType
}
////////////////////////////////////////////////////////////////////////////////

const INTRODUCTION: IntroductionType = {
	GRPD_CARD: [
		{
			key: 1,
			src: [frame37Png, frame37Webp],
			alt: "test 1",
			tag: { value: "Product design", color: "white" },
			title: { color: "white", value: "Frame.io 3.7" },
			background: "transparent",
			href: "https://blog.frame.io/2020/08/25/frameio-v3-7/",
		},
		{
			key: 2,
			src: [frame36Png, frame36Webp],
			alt: "test 2",
			tag: { value: "Product design", color: "white" },
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

const PRIVATE_WORK: ThreeCardsContentType = [
	{
		key: 1,
		status: "stop",
		src: [airbusPng, airbusWebp],
		alt: "In-flight experience",
		tag: { value: "Rethinking the in-flight experience", color: "black" },
		title: { value: "Airbus", color: "black" },
		path: "/",
	},
	{
		key: 2,
		status: "stop",
		src: [siemensPng, siemensWebp],
		alt: "Kitchen eperience",
		tag: { value: "Rethinking home applicances' interface", color: "white" },
		title: { value: "Siemens", color: "white" },
		path: "/",
	},
	{
		key: 3,
		status: "stop",
		src: [telekomPng, telekomWebp],
		alt: "TV experience",
		tag: { value: "Rethinking TV as a connected device", color: "white" },
		title: { value: "Telekom", color: "white" },
		path: "/",
	},
]

const SELECTED_WORK: SelectedWorkType = {
	GRPD_CARD_FIRST: [
		{
			key: 1,
			src: [norsePng, norseWebp],
			srcDark: [norseDarkPng, norseDarkWebp],
			alt: "Norse interieur manual",
			tag: { value: "Branding - Illustrations", color: "norse" },
			title: { value: "Norse Interiors" },
			background: "transparent",
			href: "",
		},
		{
			key: 2,
			src: [elasticPng, elasticWebp],
			srcMobile: [elasticFullPng, elasticFullWebp],
			alt: "Elastic movie who scared the hell out of me",
			tag: { value: "Design - Webflow", color: "elastic" },
			title: { value: "Elastic Film" },
			path: "/",
		},
	],
	CARD_LOVE: {
		src: [wastePng, wasteWebp],
		alt: "Love your Waste Paris based startup",
		tag: { value: "Branding - Illustrations", color: "love" },
		path: "/",
		paddingB: 72,
	},
	GRPD_CARD_SECOND: [
		{
			key: 1,
			src: [kipfitPng, kipfitWebp],
			srcDark: [kipfitDarkPng, kipfitDarkWebp],
			alt: "kiptfit keeps you fit!",
			tag: { value: "Product Design - Motion design", color: "kipfit" },
			title: { value: "Kipfit" },
			background: "transparent",
			path: "/",
		},
		{
			key: 2,
			src: [mimiPng, mimiWebp],
			alt: "Mimi hearing illustrations",
			tag: { value: "Illustration - Product design", color: "mimi" },
			title: { value: "Mimi Hearing Technology" },
			background: "mimi",
			path: "/",
		},
	],
}

const PLAYGROUND: PlaygroundType = {
	GROUP_ANIM: {
		src: [starsPng, starsWebp],
		alt: "Animation made with Lucas M Matholaz",
		tag: { value: "Animation - Illustration", color: "stars" },
		path: "/",
	},
	GROUP_COVER: {
		src: [coverPng, coverWebp],
		alt: "Covers animated in CSS and Javascript",
		tag: { value: "Programming", color: "main" },
		paddingB: 40,
		path: "/",
	},
	GROUP_: {
		tag: { value: "Programming", color: "main" },
	},
}

const HOMEPAGE_CONTENT = {
	INTRODUCTION,
	USMWORK,
	PRIVATE_WORK,
	SELECTED_WORK,
	PLAYGROUND,
}

export default HOMEPAGE_CONTENT
