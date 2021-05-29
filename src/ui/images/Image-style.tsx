import { createUseStyles } from "react-jss"
import { Theme } from "../../utils/theme/theme"

const ImageStyle = createUseStyles({
	MenuButton: {
		position: "relative",
		display: "flex",
		flexDirection: "row",
		marginBottom: "6px"
	},
	loading: {
		width: "100%",
		height: "100%",
		background: ({ theme }) => (theme as Theme).background.empty,
		padding: "16px",
		"@media (min-width: 1360px)": {
			padding: "24px",
		},
	},
	bigLoading: {
		minWidth: "100%",
		height: "fill-available",
		background: ({ theme }) => (theme as Theme).background.empty,
		padding: "16px",
		"@media (min-width: 1360px)": {
			padding: "24px",
		},
	},
	cardLoading: {
		minWidth: "100%",
		height: "100%",
		background: ({ theme }) => (theme as Theme).background.empty,
		padding: "16px 24px",

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
	mobileLoading: {
		width: "225px",
		height: "100%",
		background: ({ theme }) => (theme as Theme).background.empty,
		padding: "32px 16px",
		borderRadius: "22px",

		"@media (min-width: 768px)": {
			width: "100%",
			borderRadius: "28px",
		},
		"@media (min-width: 1360px)": {
			padding: "40px 24px",
			borderRadius: "42px",
		},
	},
	vignette: {
		width: "100%",
		height: "100%",
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

	bigVignette: {
		width: "100%",
		height: "100%",
		padding: "16px",

		"@media (min-width: 576px)": {
			padding: "16px 24px",
		},

		"@media (min-width: 768px)": {
			padding: "40px",
		},

		"@media (min-width: 992px)": {
			padding: "40px 48px",
			width: "928px",
		},

		"@media (min-width: 1360px)": {
			padding: "40px 56px",
			width: "1120px",
		},
	},
	heroVignette: {
		display: "flex",
		textAlign: "center",
		overflow: "hidden",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: "calc(536px + 40px)",

		"@media (min-width: 768px)": {
			height: "calc(704px + 40px)",
		},
		"@media (min-width: 1360px)": {
			height: "calc(840px + 40px)",
		},
	},
	img: {
		userDrag: "none",
	},
	deviceImg: {
		userDrag: "none",

		"@media (max-width: 768px)": {
			height: "fill-available",
			minWidth: "100%",
		},
	},
	Image: {
		display: "flex",
		justifyContent: "center",
		position: "relative",
		width: "auto",
		height: "100%",
		objectFit: "cover",
		transition: "transform .15s ease",

		"@media (min-width: 576px)": {
			minWidth: "100%",
		},
	},
	icon: {
		height: "100%",
		padding: "5px 0",
		display: "flex",
		alignItems: "center",
	},
})

export default ImageStyle
