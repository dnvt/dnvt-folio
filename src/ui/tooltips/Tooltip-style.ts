import { createUseStyles } from "react-jss"
import { Theme } from "../../utils/theme/theme"

const TooltipStyle = createUseStyles({
	Tooltip: {
		padding: "0 16px",
		margin: "4px auto",
		color: ({ theme }) => (theme as Theme).text.tooltip,
		background: ({ theme }) => (theme as Theme).background.tooltip,
	},
})

export default TooltipStyle
