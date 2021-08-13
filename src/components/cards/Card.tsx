import React, { useState } from "react"
import { useTheme } from "react-jss"
import useDarkMode from "use-dark-mode"
import { motion } from "framer-motion"
import { Theme } from "../../utils/theme/theme"
import { useWindowSize } from "../../hooks/useWindowSize"
import Container from "../containers/Container"
import CardImage from "./segments/CardImage"
import CardStatus, { CardStatusType } from "./segments/CardStatus"
import CardTitle from "./segments/CardTitle"
import CardStyle from "./card-style"
import FloatingTooltip from "../../ui/tooltips/FloatingTooltip"

export type STuples = [string, string]
export type ProjectColor = "main" | "stars" | "mimi" | "kipfit" | "elastic" | "waste" | "norse" | "black" | "white" | "usmobile" | "alert" | "brand" | "transparent"

export interface CardPropsType {
	alt?: string
	src?: STuples
	srcDark?: STuples
	srcMobile?: STuples
	tag?: {
		value: string,
		color?: ProjectColor
	}
	status?: CardStatusType
	title?: {
		value?: string
		color?: ProjectColor
	}
	background?: ProjectColor
	height?: number
	width?: number | "100%"
	uncontained?: Boolean
	reverse?: Boolean
	right?: Boolean
	path?: string
	href?: string
	paddingB?: number
	noHover?: Boolean
}

const Card: React.FC<CardPropsType> = (props) => {
	const theme: Theme = useTheme()
	const darkMode = useDarkMode()
	const window = useWindowSize()
	const classes = CardStyle()
	const [isHovered, setIsHovered] = useState<Boolean>(false)

	const { background, height, width, status, alt, src, srcDark, srcMobile, path, href, paddingB, reverse, right, tag, title, uncontained, noHover, children } = props

	const backgroundImage = setBackgroundImage()
	const backgroundColors = setBackgroundColor()

	const backgroundValue = (isHovered && (!noHover)) ? backgroundColors[1] : backgroundColors[0]
	const scaleValue = (isHovered && (!noHover)) ? 1.04 : 1
	// const opacityValue = isHovered ? .90 : 1

	let cardStyle: any = { height: height, width: width }
	if (status == "stop" || "construction") cardStyle = { height: height, width: width, cursor: "not-allowed" }
	if (background == "transparent") {
		cardStyle = {
			border: `1px solid ${ theme.border.outline }`,
			height: height,
			width: width
		}
	}

	let cardPrivacyClass = classes.Card

	let card = (
		<motion.div
			onHoverStart={() => setIsHovered(isHovered => !isHovered)}
			onHoverEnd={() => setIsHovered(isHovered => !isHovered)}
			className={cardPrivacyClass}
			style={cardStyle}>
			{status && <CardStatus status={status} color={title?.color} />}
			{href && <CardStatus status={"externalLink"} color={title?.color} />}
			{status == "construction" && <FloatingTooltip hover={isHovered} />}
			<CardImage
				status={status}
				alt={alt}
				src={backgroundImage}
				scale={scaleValue}
				background={backgroundValue}
				path={path}
				href={href}
				opacity={1}
				paddingB={paddingB}
			/>
			<CardTitle
				reverse={reverse}
				right={right}
				tagValue={tag?.value}
				tagColor={tag?.color}
				titleColor={title?.color}
				hover={!noHover && isHovered}
			>
				{children}
			</CardTitle>
		</motion.div>
	)

	if (uncontained) return card
	return <Container>{card}</Container>

	// 

	function setBackgroundColor() {
		if (background == "brand") return [theme.grid.fill, theme.grid.text]
		if (background == "transparent") return [theme.background.transparent, theme.background.basic]
		if (background == "usmobile") return [theme.projects.usmobile.background, theme.projects.usmobile.hover]
		if (background == "mimi") return [theme.projects.mimi.background, theme.projects.mimi.hover]
		else return [theme.background.basic, theme.background.hover]
	}

	function setBackgroundImage() {
		if (srcDark && darkMode.value) return srcDark
		if (srcMobile && window.width > 767) return srcMobile
		else return src
	}

}

export default Card
