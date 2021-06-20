import { Theme } from "../../utils/theme/theme"
import { ListProjects } from "./ProjectsProps"
import heroCoverPng from "../../assets/images/Coverjs/Work/CoverHero.png"
import heroCoverWebp from "../../assets/images/Coverjs/Work/CoverHero.webp"
import wasteFooterPng from "../../assets/images/Footer/Waste.png"
import wasteFooterWebp from "../../assets/images/Footer/Waste.webp"
import starsFooterPng from "../../assets/images/Footer/Stars.png"
import starsFooterWebp from "../../assets/images/Footer/Stars.webp"
import coversFooterPng from "../../assets/images/Footer/Coverjs.png"
import coversFooterWebp from "../../assets/images/Footer/Coverjs.webp"

function getContent(color: any, theme: Theme): ListProjects {
	return {
		coverjs: {
			HERO: { images: [heroCoverPng, heroCoverWebp] },
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
					src: [heroCoverPng, heroCoverWebp],
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
		matrix: {
			HERO: {
				images: [heroCoverPng, heroCoverWebp],
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
					src: [heroCoverPng, heroCoverWebp],
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
		branding: {
			HERO: { images: [heroCoverPng, heroCoverWebp] },
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
					src: [heroCoverPng, heroCoverWebp],
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
		norse: {
			HERO: { images: [heroCoverPng, heroCoverWebp] },
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
					src: [heroCoverPng, heroCoverWebp],
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
		elastic: {
			HERO: { images: [heroCoverPng, heroCoverWebp] },
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
					src: [heroCoverPng, heroCoverWebp],
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
		kipfit: {
			HERO: { images: [heroCoverPng, heroCoverWebp] },
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
					src: [heroCoverPng, heroCoverWebp],
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
		waste: {
			HERO: { images: [heroCoverPng, heroCoverWebp] },
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
					src: [heroCoverPng, heroCoverWebp],
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
		mimi: {
			HERO: { images: [heroCoverPng, heroCoverWebp] },
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
					src: [heroCoverPng, heroCoverWebp],
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
		stars: {
			HERO: { images: [heroCoverPng, heroCoverWebp] },
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
					src: [heroCoverPng, heroCoverWebp],
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
		airbus: {
			HERO: { images: [heroCoverPng, heroCoverWebp] },
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
					src: [heroCoverPng, heroCoverWebp],
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
			HERO: { images: [heroCoverPng, heroCoverWebp] },
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
					src: [heroCoverPng, heroCoverWebp],
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
			HERO: { images: [heroCoverPng, heroCoverWebp] },
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
					src: [heroCoverPng, heroCoverWebp],
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