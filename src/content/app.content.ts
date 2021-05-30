import { FooterContentType } from "../components/cards/layouts/FooterCards"
import { GroupedContentType } from "../components/cards/layouts/GroupedCards"

export const FOOTER_CARDS: FooterContentType = [
	{
		key: 1,
		src: ["", ""],
		alt: "test 1",
		title: { value: "Value title 1" },
	},
	{
		key: 2,
		src: ["", ""],
		alt: "test 2",
		title: { value: "Value title 2" },
	},
	{
		key: 3,
		src: ["", ""],
		alt: "test 3",
		title: { value: "Value title 3" },
	},
]

export const GROUPED_CARDS: GroupedContentType = [
	{
		key: 1,
		src: ["", ""],
		alt: "test 1",
		tag: { color: "red", value: "Value tag 1" },
		title: { value: "Value title 1" },
	},
	{
		key: 2,
		src: ["", ""],
		alt: "test 2",
		tag: { value: "Value tag 2" },
		title: { value: "Value title 2" },
		background: { color: "red" },
	},
]
