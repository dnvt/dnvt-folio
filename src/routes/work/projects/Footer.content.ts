import wasteFooterPng from "../../../assets/images/Footer/Waste.png"
import wasteFooterWebp from "../../../assets/images/Footer/Waste.webp"
import { STuples } from "../../../components/cards/Card"

type ListOfProjects = {
	coverjs: FooterProjects
	branding: FooterProjects
	matrix: FooterProjects
	norse: FooterProjects
	elastic: FooterProjects
	waste: FooterProjects
	kipfit: FooterProjects
	mimi: FooterProjects
	stars: FooterProjects
	airbus: FooterProjects
	siemens: FooterProjects
	telekom: FooterProjects
}
type FooterProjects = {
	src: STuples
	alt: string
	path: string
}

function getFooter(): ListOfProjects {
	return {
		coverjs: {
			src: [wasteFooterPng, wasteFooterWebp],
			alt: "I'm an alt ",
			path: "/",
		},
		matrix: {
			src: [wasteFooterPng, wasteFooterWebp],
			alt: "I'm an alt ",
			path: "/",
		},
		branding: {
			src: [wasteFooterPng, wasteFooterWebp],
			alt: "I'm an alt ",
			path: "/",
		},
		norse: {
			src: [wasteFooterPng, wasteFooterWebp],
			alt: "I'm an alt ",
			path: "/",
		},
		elastic: {
			src: [wasteFooterPng, wasteFooterWebp],
			alt: "I'm an alt ",
			path: "/",
		},
		kipfit: {
			src: [wasteFooterPng, wasteFooterWebp],
			alt: "I'm an alt ",
			path: "/",
		},
		waste: {
			src: [wasteFooterPng, wasteFooterWebp],
			alt: "I'm an alt ",
			path: "/",
		},
		mimi: {
			src: [wasteFooterPng, wasteFooterWebp],
			alt: "I'm an alt ",
			path: "/",
		},
		stars: {
			src: [wasteFooterPng, wasteFooterWebp],
			alt: "I'm an alt ",
			path: "/",
		},
		airbus: {
			src: [wasteFooterPng, wasteFooterWebp],
			alt: "I'm an alt ",
			path: "/",
		},
		telekom: {
			src: [wasteFooterPng, wasteFooterWebp],
			alt: "I'm an alt ",
			path: "/",
		},
		siemens: {
			src: [wasteFooterPng, wasteFooterWebp],
			alt: "I'm an alt ",
			path: "/",
		},
	}
}

export default getFooter
