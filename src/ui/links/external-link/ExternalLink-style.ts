import { createUseStyles } from "react-jss"

const ExternalLinkStyle = createUseStyles({
	external: {
		display: "flex",
		height: "auto",
		flexDirection: "column",
		margin: "0",
		paddingBottom: "8px",
		width: "100%",
		"@media (min-width: 768px)": { width: "max-content", marginRight: "32px" },
		"@media (min-width: 1360px)": { marginRight: "40px" },
		"&:last-of-type": {
			marginRight: "0px",
		},
		"& :hover": {
			cursor: "pointer",
		},
	},
	inside: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		transition: "margin 0.12s ease",
	},
	link: {
		fontFamily: "GT Sectra",
		fontWeight: "normal",
		fontSize: "19px",
		lineHeight: "24px",
		letterSpacing: "0em",
		padding: "5px 0 12px",
		transition: "margin .12s ease",

		"@media (min-width: 768px)": {
			padding: "8px 0 9px",
			fontSize: "21px",
			lineHeight: "32px",
		},
		"@media (min-width: 1360px)": {
			padding: "8px 0 9px",
			fontSize: "23px",
			lineHeight: "32px",
		},
	},
	iconLeft: {
		paddingBottom: "2px",
		opacity: "0",
		transition: "opacity .12s ease, margin .12s ease",
		"@media (min-width: 768px)": {
			paddingBottom: "0px",
			paddingTop: "4px",
		},
	},
	iconRight: {
		paddingBottom: "2px",
		transition: "opacity .12s ease, margin .12s ease",
		"@media (min-width: 768px)": {
			paddingBottom: "0px",
			paddingTop: "4px",
		},
	},
})

export default ExternalLinkStyle
