import { FooterContentType } from "./components/cards/layouts/FooterCards"
import { GroupedContentType } from "./components/cards/layouts/GroupedCards"
import { FiveImagesType } from "./components/devices/layouts/DragFramelessFive"
import { FourImagesType } from "./components/devices/layouts/DragMobileFour"
import { DevicesMixed } from "./components/devices/layouts/GroupedMobileBrowser"

// import App01Png from "../src/assets/images/USMobile/System/App-01.png"
import App02Png from "../src/assets/images/USMobile/System/App-02.png"
import App03Png from "../src/assets/images/USMobile/System/App-03.png"
import App04Png from "../src/assets/images/USMobile/System/App-04.png"
import App05Png from "../src/assets/images/USMobile/System/App-05.png"
// import App01Webp from "../src/assets/images/USMobile/System/App-01.webp"
import App02Webp from "../src/assets/images/USMobile/System/App-02.webp"
import App03Webp from "../src/assets/images/USMobile/System/App-03.webp"
import App04Webp from "../src/assets/images/USMobile/System/App-04.webp"
import App05Webp from "../src/assets/images/USMobile/System/App-05.webp"
import norsePng from "../src/assets/images/Norse/Norse.png"
import norseWebp from "../src/assets/images/Norse/Norse.webp"
import elasticPng from "../src/assets/images/Elastic/Elastic.png"
import elasticWebp from "../src/assets/images/Elastic/Elastic.webp"
import { ThreeCardsContentType } from "./components/cards/layouts/DragCardThree"
import { STuples } from "./components/cards/Card"

const norseImages: STuples = [norsePng, norseWebp]
const elastic: STuples = [elasticPng, elasticWebp]

const FOOTER_CARDS: FooterContentType = [
	{
		key: 1,
		src: ["", ""],
		alt: "test 1",
		title: { value: "Value title 1" },
		path: "",
	},
	{
		key: 2,
		src: ["", ""],
		alt: "test 2",
		title: { value: "Value title 2" },
		path: "",
	},
	{
		key: 3,
		src: elastic,
		alt: "test 3",
		title: { value: "Value title 3" },
		path: "",
	},
]

const THREE_CARDS: ThreeCardsContentType = [
	{
		key: 1,
		src: ["", ""],
		alt: "test 1",
		tag: { value: "Test 1" },
		title: { value: "Value title 1" },
		path: "",
	},
	{
		key: 2,
		src: ["", ""],
		alt: "test 2",
		tag: { value: "Test 1" },
		title: { value: "Value title 2" },
		path: "",
	},
	{
		key: 3,
		src: ["", ""],
		alt: "test 3",
		tag: { value: "Test 1" },
		title: { value: "Value title 3" },
		path: "",
	},
]

const GROUPED_CARDS: GroupedContentType = [
	{
		key: 1,
		src: norseImages,
		alt: "test 1",
		tag: { value: "Value tag 1" },
		title: { value: "Value title 1" },
		background: "transparent",
		href: "/",
	},
	{
		key: 2,
		src: ["", ""],
		alt: "test 2",
		tag: { value: "Value tag 2" },
		title: { value: "Value title 2" },
		path: "",
	},
]

const MOBILE_FOUR: FourImagesType = [
	{ src: ["", ""], alt: "Test 1", key: 1 },
	{ src: ["", ""], alt: "Test 2", key: 2 },
	{ src: ["", ""], alt: "Test 3", key: 3 },
	{ src: ["", ""], alt: "Test 4", key: 4 },
]

const FRAMELESS_FIVE: FiveImagesType = [
	{ src: ["", ""], alt: "Test 1", key: 1 },
	{ src: [App02Png, App02Webp], alt: "Test 2", key: 2 },
	{ src: [App03Png, App03Webp], alt: "Test 3", key: 3 },
	{ src: [App04Png, App04Webp], alt: "Test 4", key: 4 },
	{ src: [App05Png, App05Webp], alt: "Test 4", key: 5 },
]

const GROUPED_DEVICES: DevicesMixed = {
	browser: [
		{ src: ["", ""], alt: "Test 1", key: 1 },
		{ src: ["", ""], alt: "Test 2", key: 2 },
	],
	mobile: [
		{ src: ["", ""], alt: "Test 1", key: 3 },
		{ src: ["", ""], alt: "Test 2", key: 4 },
	],
}

const CONTENT_APP = {
	FOOTER_CARDS,
	THREE_CARDS,
	GROUPED_CARDS,
	GROUPED_DEVICES,
	MOBILE_FOUR,
	FRAMELESS_FIVE,
}

export default CONTENT_APP
