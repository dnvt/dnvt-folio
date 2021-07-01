import { createUseStyles } from "react-jss"
import { Theme } from "../../utils/theme/theme"

const MenuStyle = createUseStyles({
	Menu: {
		position: "fixed",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		top: "0",
		bottom: "0",
		left: "0",
		height: "100%",
		width: "100%",
		background: ({ theme }) => (theme as Theme).background.default,
		zIndex: "999",
	},
	hash: {
		position: "relative",
		bottom: "-20px",
		display: "flex",
		flexDirection: "column",
		flexGrow: "1",
	},
	nav: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		width: "140px",
		margin: "auto",
		marginTop: "104px",
		marginLeft: "22px",
		marginBottom: "0",
		minHeight: "240px",
		flexGrow: "1",

		padding: "8px 0px",
		"@media (min-width: 768px)": {
			justifyContent: "flex-start",
			padding: "16px 0px",
		},
		"@media (min-width: 992px)": {
			padding: "24px 0px",
		},
		"@media (min-width: 1360px)": {
			padding: "32px 0px",
		},
		"&:first-of-type": {
			display: "flex",
		},
	},
	hashContain: {
		position: "relative",
		width: "100%",
		height: "auto",
		margin: "-96px auto 0",
		textAlign: "center",
		// height: "100%",
		display: "flex",
		justifyContent: "center",
	},
})

export default MenuStyle
