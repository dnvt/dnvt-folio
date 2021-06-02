import { createUseStyles } from "react-jss"

const CardStyle = createUseStyles({
	Card: {
		position: "relative",
		width: "100%",
		minWidth: "288px",
		height: "512px",
		overflowWrap: "break-word",
		overflow: "hidden",
		cursor: "pointer",
		"@media (min-width: 768px)": {
			height: "576px",
		},
		"@media (min-width: 1360px)": {
			height: "704px",
		},
	},

	PrivateCard: {
		position: "relative",
		width: "100%",
		minWidth: "288px",
		height: "448px",
		overflowWrap: "break-word",
		overflow: "hidden",
		cursor: "not-allowed",
		"@media (min-width: 768px)": {
			height: "576px",
			minWidth: "288px",
		},
		"@media (min-width: 1360px)": {
			height: "704px",
		},
	},

	CardImage: {
		display: "flex",
		justifyContent: "center",
		transition: "background .15s ease",
		width: "auto",
		position: "relative",
		height: "100%",
		objectFit: "cover",
		"@media (min-width: 576px)": {
			minWidth: "100%",
		},
	},

	Status: {
		position: "absolute",
		zIndex: "100",
		maxWidth: "100%",
		top: "0",
		left: "0",
		padding: "16px",
		"@media (min-width: 576px)": {
			padding: "16px 24px",
		},

		"@media (min-width: 768px)": {
			padding: "40px",
		},

		"@media (min-width: 992px)": {
			padding: "40px 48px",
		},

		"@media (min-width: 1360px)": {
			padding: "40px 56px",
		},
	},

	projectTitle: {
		position: "absolute",
		maxWidth: "100%",
		bottom: "0",
		left: "0",
		padding: "16px",

		"@media (min-width: 576px)": {
			padding: "16px 24px",
		},

		"@media (min-width: 768px)": {
			padding: "32px 40px",
		},

		"@media (min-width: 992px)": {
			padding: "40px 48px",
		},

		"@media (min-width: 1360px)": {
			padding: "40px 56px",
			maxWidth: "608px",
		},
	},

	projectTitleRight: {
		position: "absolute",
		maxWidth: "100%",
		bottom: "0",
		right: "0",
		padding: "16px",

		"@media (min-width: 576px)": {
			padding: "16px 24px",
			maxWidth: "50%",
		},

		"@media (min-width: 768px)": {
			padding: "40px",
			maxWidth: "40%",
		},

		"@media (min-width: 992px)": {
			padding: "40px 48px",
		},

		"@media (min-width: 1360px)": {
			padding: "40px 56px",
		},
	},

	MenuButton: {
		position: "relative",
		display: "flex",
		flexDirection: "row",
		marginBottom: "6px",
	},

	Icon: {
		height: "100%",
		padding: "5px 0",
		display: "flex",
		alignItems: "center",
	},
})

export default CardStyle
