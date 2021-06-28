import { Theme } from "../../../utils/theme/theme"
import { ListProjects } from "./ProjectsProps"
import matrixCoverPng from "../../../assets/images/USMobile/Matrix/MatrixHero.png"
import matrixCoverWebp from "../../../assets/images/USMobile/Matrix/MatrixHero.webp"
// import brandingCoverPng from "../../../assets/images/USMobile/Matrix/BrandingHero.png"
// import brandingCoverWebp from "../../../assets/images/USMobile/Matrix/BrandingHero.webp"
import coverjsCoverPng from "../../../assets/images/Coverjs/CoverHero.png"
import coverjsCoverWebp from "../../../assets/images/Coverjs/CoverHero.webp"
import norseCoverPng from "../../../assets/images/Norse/NorseHero.png"
import norseCoverWebp from "../../../assets/images/Norse/NorseHero.webp"
import wasteCoverPng from "../../../assets/images/Waste/WasteHero.png"
import wasteCoverWebp from "../../../assets/images/Waste/WasteHero.webp"
import mimiCoverPng from "../../../assets/images/Mimi/MimiHero.png"
import mimiCoverWebp from "../../../assets/images/Mimi/MimiHero.webp"
import kipfitCoverPng from "../../../assets/images/Kipfit/KipfitHero.png"
import kipfitCoverWebp from "../../../assets/images/Kipfit/KipfitHero.webp"

import wasteFooterPng from "../../../assets/images/Footer/Waste.png"
import wasteFooterWebp from "../../../assets/images/Footer/Waste.webp"
import starsFooterPng from "../../../assets/images/Footer/Stars.png"
import starsFooterWebp from "../../../assets/images/Footer/Stars.webp"
import coversFooterPng from "../../../assets/images/Footer/Coverjs.png"
import coversFooterWebp from "../../../assets/images/Footer/Coverjs.webp"
import getFooter from "./Footer.content"

function getContent(color: any, theme: Theme): ListProjects {
	return {
		coverjs: {
			HERO: { images: [coverjsCoverPng, coverjsCoverWebp] },
			INTRO: {
				section: "Fun coding project",
				title: { value: "Album covers animated in javascript." },
				typeOfProject: { value: "Javascript", color: color },
				paragraph: [
					{
						key: 1,
						paragraph:
							"Product designer and creative director able to provide strong ip on the development of product designs, marketing campaigns, user interfaces, and motion design.",
					},
				],
				link: "https://dnvt.github.io/Coverjs/",
				button: "Visit project",
			},
			IMAGES: [
				{
					key: 1,
					src: ["", ""],
					alt: "alt",
				},
			],
			THANKS: [
				{
					key: 1,
					paragraph:
						"Thanks to all the team at US Mobile for making this project happening. Thanks for @Nikita for implementing all the guidelines in React.",
				},
				{
					key: 2,
					paragraph: "Thanks for reading it.",
				},
			],
			FOOTER: [
				{
					key: 1,
					reverse: true,
					title: { value: "Previous" },
					...getFooter().stars
				},
				{
					key: 2,
					title: { value: "Other" },
					...getFooter().norse
				},
				{
					key: 3,
					title: { value: "Next" },
					...getFooter().branding
				},
			],
		},
		branding: {
			HERO: {
				images: ["", ""],
				backgroundColor: theme.projects.usmobile.background
			},
			INTRO: {
				section: "Head of design",
				title: {
					value: "Creative direction & design guidelines"
				},
				typeOfProject: { value: "Design system, Illustration, Motion Design", color: color },
				paragraph: [
					{
						key: 1,
						paragraph:
							"Product designer and creative director able to provide strong ip on the development of product designs, marketing campaigns, user interfaces, and motion design.",
					},
				],
				link: "https://dnvt.github.io/Coverjs/",
				button: "Visit project",
			},
			IMAGES: [
				{
					key: 1,
					src: ["", ""],
					alt: "alt",
				},
			],
			THANKS: [
				{
					key: 1,
					paragraph:
						"Thanks to all the team at US Mobile for making this project happening. Thanks for @Nikita for implementing all the guidelines in React.",
				},
				{
					key: 2,
					paragraph: "Thanks for reading it.",
				},
			],
			FOOTER: [
				{
					key: 1,
					reverse: true,
					title: { value: "Previous" },
					...getFooter().coverjs
				},
				{
					key: 2,
					title: { value: "Other" },
					...getFooter().system
				},
				{
					key: 3,
					title: { value: "Next" },
					...getFooter().matrix
				},
			],
		},
		matrix: {
			HERO: {
				images: [matrixCoverPng, matrixCoverWebp],
				backgroundColor: theme.projects.usmobile.background
			},
			INTRO: {
				section: "Head of Design",
				title: { value: "Build your plan" },
				typeOfProject: { value: "Product design", color: color },
				paragraph: [
					{
						key: 1,
						paragraph:
							"Product designer and creative director able to provide strong ip on the development of product designs, marketing campaigns, user interfaces, and motion design.",
					},
				],
				// link: "https://dnvt.github.io/Coverjs/",
				// button: "Visit project",
			},
			IMAGES: [
				{
					key: 1,
					src: ["", ""],
					alt: "alt",
				},
			],
			THANKS: [
				{
					key: 1,
					paragraph:
						"Thanks to all the team at US Mobile for making this project happening. Thanks for @Nikita for implementing all the guidelines in React.",
				},
				{
					key: 2,
					paragraph: "Thanks for reading it.",
				},
			],
			FOOTER: [
				{
					key: 1,
					reverse: true,
					title: { value: "Previous" },
					...getFooter().branding
				},
				{
					key: 2,
					title: { value: "Other" },
					...getFooter().mimi
				},
				{
					key: 3,
					title: { value: "Next" },
					...getFooter().system
				},
			],
		},
		norse: {
			HERO: { images: [norseCoverPng, norseCoverWebp], backgroundColor: "transparent" },
			INTRO: {
				section: "Selected work",
				title: { value: "Norse Interior" },
				typeOfProject: { value: "Branding, Illustrations", color: color },
				paragraph: [
					{
						key: 1,
						paragraph:
							"Product designer and creative director able to provide strong ip on the development of product designs, marketing campaigns, user interfaces, and motion design.",
					},
				],
				link: "https://dnvt.github.io/Coverjs/",
				button: "Visit project",
			},
			IMAGES: [
				{
					key: 1,
					src: ["", ""],
					alt: "alt",
				},
			],
			THANKS: [
				{
					key: 1,
					paragraph:
						"Thanks to all the team at US Mobile for making this project happening. Thanks for @Nikita for implementing all the guidelines in React.",
				},
				{
					key: 2,
					paragraph: "Thanks for reading it.",
				},
			],
			FOOTER: [
				{
					key: 1,
					reverse: true,
					title: { value: "Previous" },
					...getFooter().telekom
				},
				{
					key: 2,
					title: { value: "Other" },
					...getFooter().matrix
				},
				{
					key: 3,
					title: { value: "Next" },
					...getFooter().elastic
				},
			],
		},
		// TODO
		elastic: {
			HERO: { images: ["", ""] },
			INTRO: {
				section: "Freelancing gig",
				title: { value: "Elastic Film" },
				typeOfProject: { value: "Design - Webflow", color: color },
				paragraph: [
					{
						key: 1,
						paragraph:
							"Product designer and creative director able to provide strong ip on the development of product designs, marketing campaigns, user interfaces, and motion design.",
					},
				],
				link: "https://dnvt.github.io/Coverjs/",
				button: "Visit project",
			},
			IMAGES: [
				{
					key: 1,
					src: ["", ""],
					alt: "alt",
				},
			],
			THANKS: [
				{
					key: 1,
					paragraph:
						"Thanks to all the team at US Mobile for making this project happening. Thanks for @Nikita for implementing all the guidelines in React.",
				},
				{
					key: 2,
					paragraph: "Thanks for reading it.",
				},
			],
			FOOTER: [
				{
					key: 1,
					reverse: true,
					title: { value: "Previous" },
					...getFooter().norse
				},
				{
					key: 2,
					title: { value: "Other" },
					...getFooter().system
				},
				{
					key: 3,
					title: { value: "Next" },
					...getFooter().kipfit
				},
			],
		},
		kipfit: {
			HERO: {
				images: [kipfitCoverPng, kipfitCoverWebp],
				backgroundColor: "transparent"
			},
			INTRO: {
				section: "Senior Thesis",
				title: { value: "Kipfit" },
				typeOfProject: { value: "Product Design - Motion Design", color: color },
				paragraph: [
					{
						key: 1,
						paragraph:
							"Product designer and creative director able to provide strong ip on the development of product designs, marketing campaigns, user interfaces, and motion design.",
					},
				],
				link: "https://dnvt.github.io/Coverjs/",
				button: "Visit project",
			},
			IMAGES: [
				{
					key: 1,
					src: ["", ""],
					alt: "alt",
				},
			],
			THANKS: [
				{
					key: 1,
					paragraph:
						"Thanks to all the team at US Mobile for making this project happening. Thanks for @Nikita for implementing all the guidelines in React.",
				},
				{
					key: 2,
					paragraph: "Thanks for reading it.",
				},
			],
			FOOTER: [
				{
					key: 1,
					reverse: true,
					title: { value: "Previous" },
					...getFooter().elastic
				},
				{
					key: 2,
					title: { value: "Random" },
					...getFooter().coverjs
				},
				{
					key: 3,
					title: { value: "Next" },
					...getFooter().waste
				},
			],
		},
		waste: {
			HERO: {
				images: [wasteCoverPng, wasteCoverWebp],
				backgroundColor: "transparent"
			},
			INTRO: {
				section: "Freelance gig",
				title: { value: "Love your waste" },
				typeOfProject: { value: "Illustration", color: color },
				paragraph: [
					{
						key: 1,
						paragraph:
							"Product designer and creative director able to provide strong ip on the development of product designs, marketing campaigns, user interfaces, and motion design.",
					},
				],
				link: "https://dnvt.github.io/Coverjs/",
				button: "Visit project",
			},
			IMAGES: [
				{
					key: 1,
					src: ["", ""],
					alt: "alt",
				},
			],
			THANKS: [
				{
					key: 1,
					paragraph:
						"Thanks to all the team at US Mobile for making this project happening. Thanks for @Nikita for implementing all the guidelines in React.",
				},
				{
					key: 2,
					paragraph: "Thanks for reading it.",
				},
			],
			FOOTER: [
				{
					key: 1,
					reverse: true,
					title: { value: "Previous" },
					...getFooter().kipfit
				},
				{
					key: 2,
					title: { value: "Other" },
					...getFooter().matrix
				},
				{
					key: 3,
					title: { value: "Next" },
					...getFooter().mimi
				},
			],
		},
		mimi: {
			HERO: {
				images: [mimiCoverPng, mimiCoverWebp],
				backgroundColor: theme.projects.mimi.background
			},
			INTRO: {
				section: "Freelance gig",
				title: { value: "Mimi Hearing Technology" },
				typeOfProject: { value: "Illustration - Product design - Motion design", color: color },
				paragraph: [
					{
						key: 1,
						paragraph:
							"Product designer and creative director able to provide strong ip on the development of product designs, marketing campaigns, user interfaces, and motion design.",
					},
				],
				link: "https://dnvt.github.io/Coverjs/",
				button: "Visit project",
			},
			IMAGES: [
				{
					key: 1,
					src: ["", ""],
					alt: "alt",
				},
			],
			THANKS: [
				{
					key: 1,
					paragraph:
						"Thanks to all the team at US Mobile for making this project happening. Thanks for @Nikita for implementing all the guidelines in React.",
				},
				{
					key: 2,
					paragraph: "Thanks for reading it.",
				},
			],
			FOOTER: [
				{
					key: 1,
					reverse: true,
					title: { value: "Previous" },
					...getFooter().waste
				},
				{
					key: 2,
					title: { value: "Other" },
					...getFooter().system
				},
				{
					key: 3,
					title: { value: "Next" },
					...getFooter().stars
				},
			],
		},
		stars: {
			HERO: { images: ["", ""] },
			INTRO: {
				section: "Fun animation project",
				title: { value: "A park for the homeless in the stars" },
				typeOfProject: { value: "Animation - Illustration", color: color },
				paragraph: [
					{
						key: 1,
						paragraph:
							"Product designer and creative director able to provide strong ip on the development of product designs, marketing campaigns, user interfaces, and motion design.",
					},
				],
				link: "https://dnvt.github.io/Coverjs/",
				button: "Visit project",
			},
			IMAGES: [
				{
					key: 1,
					src: ["", ""],
					alt: "alt",
				},
			],
			THANKS: [
				{
					key: 1,
					paragraph:
						"Thanks to all the team at US Mobile for making this project happening. Thanks for @Nikita for implementing all the guidelines in React.",
				},
				{
					key: 2,
					paragraph: "Thanks for reading it.",
				},
			],
			FOOTER: [
				{
					key: 1,
					reverse: true,
					title: { value: "Previous" },
					...getFooter().mimi
				},
				{
					key: 2,
					title: { value: "Other" },
					...getFooter().matrix
				},
				{
					key: 3,
					title: { value: "Next" },
					...getFooter().coverjs
				},
			],
		},
		airbus: {
			HERO: { images: ["", ""] },
			INTRO: {
				section: "Fun animation project",
				title: { value: "A park for the homeless in the stars" },
				typeOfProject: { value: "Animation - Illustration", color: color },
				paragraph: [
					{
						key: 1,
						paragraph:
							"Product designer and creative director able to provide strong ip on the development of product designs, marketing campaigns, user interfaces, and motion design.",
					},
				],
				link: "https://dnvt.github.io/Coverjs/",
				button: "Visit project",
			},
			IMAGES: [
				{
					key: 1,
					src: ["", ""],
					alt: "alt",
				},
			],
			THANKS: [
				{
					key: 1,
					paragraph:
						"Thanks to all the team at US Mobile for making this project happening. Thanks for @Nikita for implementing all the guidelines in React.",
				},
				{
					key: 2,
					paragraph: "Thanks for reading it.",
				},
			],
			FOOTER: [
				{
					key: 1,
					reverse: true,
					title: { value: "Previous" },
					src: [wasteFooterPng, wasteFooterWebp],
					alt: "I'm an alt ",
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
					src: [coversFooterPng, coversFooterWebp],
					alt: "I'm an alt ",
					path: "/",
				},
			],
		},
		telekom: {
			HERO: { images: ["", ""] },
			INTRO: {
				section: "Fun animation project",
				title: { value: "A park for the homeless in the stars" },
				typeOfProject: { value: "Animation - Illustration", color: color },
				paragraph: [
					{
						key: 1,
						paragraph:
							"Product designer and creative director able to provide strong ip on the development of product designs, marketing campaigns, user interfaces, and motion design.",
					},
				],
				link: "https://dnvt.github.io/Coverjs/",
				button: "Visit project",
			},
			IMAGES: [
				{
					key: 1,
					src: ["", ""],
					alt: "alt",
				},
			],
			THANKS: [
				{
					key: 1,
					paragraph:
						"Thanks to all the team at US Mobile for making this project happening. Thanks for @Nikita for implementing all the guidelines in React.",
				},
				{
					key: 2,
					paragraph: "Thanks for reading it.",
				},
			],
			FOOTER: [
				{
					key: 1,
					reverse: true,
					title: { value: "Previous" },
					src: [wasteFooterPng, wasteFooterWebp],
					alt: "I'm an alt ",
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
					src: [coversFooterPng, coversFooterWebp],
					alt: "I'm an alt ",
					path: "/",
				},
			],
		},
		siemens: {
			HERO: { images: ["", ""] },
			INTRO: {
				section: "Fun animation project",
				title: { value: "A park for the homeless in the stars" },
				typeOfProject: { value: "Animation - Illustration", color: color },
				paragraph: [
					{
						key: 1,
						paragraph:
							"Product designer and creative director able to provide strong ip on the development of product designs, marketing campaigns, user interfaces, and motion design.",
					},
				],
				link: "https://dnvt.github.io/Coverjs/",
				button: "Visit project",
			},
			IMAGES: [
				{
					key: 1,
					src: ["", ""],
					alt: "alt",
				},
			],
			THANKS: [
				{
					key: 1,
					paragraph:
						"Thanks to all the team at US Mobile for making this project happening. Thanks for @Nikita for implementing all the guidelines in React.",
				},
				{
					key: 2,
					paragraph: "Thanks for reading it.",
				},
			],
			FOOTER: [
				{
					key: 1,
					reverse: true,
					title: { value: "Previous" },
					src: [wasteFooterPng, wasteFooterWebp],
					alt: "I'm an alt ",
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
					src: [coversFooterPng, coversFooterWebp],
					alt: "I'm an alt ",
					path: "/",
				},
			],
		},
	}
}

export default getContent