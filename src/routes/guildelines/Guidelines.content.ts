import { FooterContentType } from "../../components/cards/layouts/FooterCards"
import { ThreeCardsContentType } from "../../components/cards/layouts/DragCardThree"
import { GroupedContentType } from "../../components/cards/layouts/GroupedCards"
import { FourImagesType } from "../../components/devices/layouts/DragMobileFour"
import { FiveImagesType } from "../../components/devices/layouts/DragFramelessFive"
import { DevicesMixed } from "../../components/devices/layouts/GroupedMobileBrowser"

// const norseImages: STuples = [norsePng, norseWebp]

const FOOTER_CARDS: FooterContentType = [
	{
		key: 1,
		reverse: true,
		src: ["", ""],
		alt: "test 1",
		title: { value: "Reverse Title" },
		path: "",
	},
	{
		key: 2,
		src: ["", ""],
		alt: "test 2",
		title: { value: "Random Title" },
		path: "",
	},
	{
		key: 3,
		src: ["", ""],
		alt: "test 3",
		title: { value: "Next Title" },
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
		tag: { value: "Test 1", color: "red" },
		title: { value: "Value title 3" },
		path: "",
	},
]

const GROUPED_CARDS: GroupedContentType = [
	{
		key: 1,
		src: ["", ""],
		alt: "test 1",
		tag: { color: "red", value: "Value tag 1" },
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
	{ src: ["", ""], alt: "Test 2", key: 2 },
	{ src: ["", ""], alt: "Test 3", key: 3 },
	{ src: ["", ""], alt: "Test 4", key: 4 },
	{ src: ["", ""], alt: "Test 4", key: 5 },
]

const FRAMELESS_FIVE_EMPTY: FiveImagesType = [
	{ src: ["", ""], alt: "Test 1", key: 1 },
	{ src: ["", ""], alt: "Test 2", key: 2 },
	{ src: ["", ""], alt: "Test 3", key: 3 },
	{ src: ["", ""], alt: "Test 4", key: 4 },
	{ src: ["", ""], alt: "Test 4", key: 5 },
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
	FRAMELESS_FIVE_EMPTY,
}

export default CONTENT_APP
