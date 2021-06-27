import coverFooterPng from "../../../assets/images/Footer/Coverjs.png"
import coverFooterWebp from "../../../assets/images/Footer/Coverjs.webp"
import matrixFooterPng from "../../../assets/images/Footer/Matrix.png"
import matrixFooterWebp from "../../../assets/images/Footer/Matrix.webp"
import brandingFooterPng from "../../../assets/images/Footer/System.png"
import brandingFooterWebp from "../../../assets/images/Footer/System.webp"
import norseFooterPng from "../../../assets/images/Footer/Norse.png"
import norseFooterWebp from "../../../assets/images/Footer/Norse.webp"
import elasticFooterPng from "../../../assets/images/Elastic/Elastic.png"
import elasticFooterWebp from "../../../assets/images/Elastic/Elastic.webp"
import kipfitFooterPng from "../../../assets/images/Footer/Kipfit.png"
import kipfitFooterWebp from "../../../assets/images/Footer/Kipfit.webp"
import wasteFooterPng from "../../../assets/images/Footer/Waste.png"
import wasteFooterWebp from "../../../assets/images/Footer/Waste.webp"
import mimiFooterPng from "../../../assets/images/Footer/Mimi.png"
import mimiFooterWebp from "../../../assets/images/Footer/Mimi.webp"
import starsFooterPng from "../../../assets/images/Footer/Stars.png"
import starsFooterWebp from "../../../assets/images/Footer/Stars.webp"
import systemFooterPng from "../../../assets/images/Footer/Dashboard.png"
import systemFooterWebp from "../../../assets/images/Footer/Dashboard.webp"
import { ProjectColor, STuples } from "../../../components/cards/Card"

type ListOfProjects = {
	coverjs: FooterProjects
	branding: FooterProjects
	matrix: FooterProjects
	system: FooterProjects
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
	background?: ProjectColor
}

function getFooter(): ListOfProjects {
	return {
		coverjs: {
			src: [coverFooterPng, coverFooterWebp],
			alt: "I'm an alt ",
			path: "/playground/coverjs",
		},
		matrix: {
			src: [matrixFooterPng, matrixFooterWebp],
			alt: "I'm an alt ",
			path: "/work/usmobile/matrix",
			background: "usmobile",
		},
		branding: {
			src: [brandingFooterPng, brandingFooterWebp],
			alt: "I'm an alt ",
			path: "/work/usmobile/branding",
			background: "usmobile",
		},
		system: {
			src: [systemFooterPng, systemFooterWebp],
			alt: "I'm an alt ",
			path: "/work/usmobile/dashboard-pwa",
			background: "usmobile",
		},
		norse: {
			src: [norseFooterPng, norseFooterWebp],
			alt: "I'm an alt ",
			path: "/work/norse-interior",
			background: "transparent",
		},
		elastic: {
			src: [elasticFooterPng, elasticFooterWebp],
			alt: "I'm an alt ",
			path: "/work/elastic-film",
		},
		kipfit: {
			src: [kipfitFooterPng, kipfitFooterWebp],
			alt: "I'm an alt ",
			path: "/work/kipfit-app",
			background: "transparent",
		},
		waste: {
			src: [wasteFooterPng, wasteFooterWebp],
			alt: "I'm an alt ",
			path: "/work/love-your-waste",
		},
		mimi: {
			src: [mimiFooterPng, mimiFooterWebp],
			alt: "I'm an alt ",
			path: "/work/mimi-hearing-technology",
			background: "mimi",
		},
		stars: {
			src: [starsFooterPng, starsFooterWebp],
			alt: "I'm an alt ",
			path: "/work/a-park-for-the-homeless-in-the-stars",
			background: "stars",
		},
		airbus: {
			src: [wasteFooterPng, wasteFooterWebp],
			alt: "I'm an alt ",
			path: "/work/private/airbus",
		},
		telekom: {
			src: [wasteFooterPng, wasteFooterWebp],
			alt: "I'm an alt ",
			path: "/work/private/telekom",
		},
		siemens: {
			src: [wasteFooterPng, wasteFooterWebp],
			alt: "I'm an alt ",
			path: "/work/private/siemens",
		},
	}
}

export default getFooter
