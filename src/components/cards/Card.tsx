import React from "react"
import { useTheme } from "react-jss"
import { Theme } from "../../utils/theme/theme"
import Container from "../containers/Container"
import CardImage from "./segments/CardImage"
import CardStyle from "./card-style"
import CardStatus, { CardStatusType } from "./segments/CardStatus"
import CardTitle from "./segments/CardTitle"

export interface CardPropsType {
	src: [string, string]
	alt: string
	tagValue: string
	status?: CardStatusType
	titleColor?: string
	tagColor?: string
	background?: string
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

	const { background, height, width, status, titleColor, alt, src, path, href, paddingB, reverse, right, tagValue, tagColor, uncontained, children } = props

	/// Defining if a card as a linked project yet or not
	let cardPrivacyClass = classes.Card
	if (status == "stop" || "construction") cardPrivacyClass = classes.PrivateCard

	let card = (
		<div
			className={cardPrivacyClass}
			style={
				background == theme.background.transparent
					? {
						border: `1px solid ${ theme.border.outline }`,
						height: height,
						width: width,
					}
					: { height: height, width: width }
			}>
			{status && <CardStatus status={status} />}
			<CardImage
				status={status}
				alt={alt}
				src={src}
				// background={isHovered ? backgroundHover : background}
				// scale={isHovered ? "1.04" : "1"}
				background={background ?? theme.background.empty}
				scale={1}
				path={path}
				href={href}
				paddingB={paddingB}
			/>
			<CardTitle
				reverse={reverse}
				right={right}
				tagValue={tagValue}
				tagColor={tagColor}
				titleColor={titleColor}>
				{children}
			</CardTitle>
		</div>
	)

	if (uncontained) return card
	return <Container>{card}</Container>

}

export default Card
