import { GroupedContentType } from "../../components/cards/layouts/GroupedCards"

import frame36Png from "../../assets/images/Frameio/36.png"
import frame36Webp from "../../assets/images/Frameio/36.webp"
import frame37Png from "../../assets/images/Frameio/37.png"
import frame37Webp from "../../assets/images/Frameio/37.webp"

type IntroductionType = { GRPD_CARD: GroupedContentType }

////////////////////////////////////////////////////////////////////////////////

const INTRODUCTION: IntroductionType = {
	GRPD_CARD: [
		{
			key: 1,
			src: [frame37Png, frame37Webp],
			alt: "test 1",
			tag: { color: "white", value: "Product design" },
			title: { color: "white", value: "Frame.io 3.7" },
			background: "transparent",
			href: "https://blog.frame.io/2020/08/25/frameio-v3-7/",
		},
		{
			key: 2,
			src: [frame36Png, frame36Webp],
			alt: "test 2",
			tag: { color: "white", value: "Product design" },
			title: { color: "white", value: "Frame.io 3.6" },
			href: "https://blog.frame.io/2020/08/25/frameio-v3-6/",
		},
	],
}

const HOMEPAGE_CONTENT = {
	INTRODUCTION,
}

export default HOMEPAGE_CONTENT
