import React from "react"
import { useTheme } from "react-jss"
import { Theme } from "../../../utils/theme/theme"
import Font from "../../../utils/fonts/Font"
import Icon from "../../../utils/icons/Icon"
import Underline from "../../../utils/line/Underline"
import CardStyle from "../card-style"

export type CardStatusType = "loading" | "stop" | "construction" | "externalLink"
interface StatusProps {
  status: CardStatusType
  color?: string
}

////////////////////////////////////////////////////////////////////////////////

const CardStatus: React.FC<StatusProps> = ({ status, color }) => {
  const classes = CardStyle()
  const theme: Theme = useTheme()

  let value: string | undefined
  if (status == "stop") value = "Password Protected"
  if (status == "construction") value = "In Progress"
  if (status == "externalLink") value = "External Link"

  return (
    <>
      <div className={classes.Status}>
        <div className={classes.MenuButton}>
          <div className={classes.Icon} style={{ marginRight: "8px" }}>
            <Icon name={status as CardStatusType} color={color ?? theme.text.primary} />
          </div>
          <div>
            <Font type='menu' style={{ color: color ?? theme.text.primary }}>{value}</Font>
            <Underline button opacity={0} />
          </div>
        </div>
      </div>
    </>
  )
}

export default CardStatus
