import React, { useState } from "react"
import { useTheme } from "react-jss"
import { motion } from "framer-motion"

import { Theme } from "../../utils/theme/theme"
import Container from "../containers/Container"
import CardImage from "./segments/CardImage"
import CardStatus, { CardStatusType } from "./segments/CardStatus"
import CardTitle from "./segments/CardTitle"
import CardStyle from "./card-style"

export type STuples = [string, string]

export interface CardPropsType {
	src: STuples
	alt: string
	tag?: {
		value: string,
		color?: string
	}
	status?: CardStatusType
	title?: {
		value?: string
		color?: string
	}
	background?: "alert" | "brand" | "transparent"
	height?: number
	width?: number | "100%"
	uncontained?: Boolean
	reverse?: Boolean
	right?: Boolean
	path?: string
	href?: string
	paddingB?: number
}

const Card: React.FC<CardPropsType> = (props) => {
	const theme: Theme = useTheme()
	const classes = CardStyle()
	const [isHovered, setIsHovered] = useState<Boolean>(false)

	const { background, height, width, status, alt, src, path, href, paddingB, reverse, right, tag, title, uncontained, children } = props

	const scaleValue = isHovered ? 1.04 : 1
	const opacityValue = isHovered ? .90 : 1
	const backgroundColors = setBackgroundColor()
	const backgroundValue = isHovered ? backgroundColors[1] : backgroundColors[0]

	let cardStyle: any = { height: height, width: width }
	if (background == "transparent") {
		cardStyle = {
			border: `1px solid ${ theme.border.outline }`,
		}
	}

	let cardPrivacyClass = classes.Card
	// if (status == "stop" || "construction") cardPrivacyClass = classes.PrivateCard

	let card = (
		<motion.div
			onHoverStart={() => setIsHovered(isHovered => !isHovered)}
			onHoverEnd={() => setIsHovered(isHovered => !isHovered)}
			className={cardPrivacyClass}
			style={cardStyle}>
			{status && <CardStatus status={status} color={title?.color} />}
			{href && <CardStatus status={"externalLink"} color={title?.color} />}
			<CardImage
				status={status}
				alt={alt}
				src={src}
				scale={scaleValue}
				background={backgroundValue}
				path={path}
				href={href}
				opacity={opacityValue}
				paddingB={paddingB}
			/>
			<CardTitle
				reverse={reverse}
				right={right}
				tagValue={tag?.value}
				tagColor={tag?.color}
				titleColor={title?.color}
				hover={isHovered}
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
		if (background == "transparent") return [theme.background.transparent, theme.background.empty]
		else return [theme.background.default, theme.background.hover]
	}

}

export default Card
