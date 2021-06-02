import React from "react"
import Font from "../../../utils/fonts/Font"
import Icon from "../../../utils/icons/Icon"
import Underline from "../../../utils/line/Underline"
import CardStyle from "../card-style"

export type CardStatusType = "loading" | "stop" | "construction" | "externalLink"


////////////////////////////////////////////////////////////////////////////////

const CardStatus: React.FC<{ status: CardStatusType }> = ({ status }) => {
  const classes = CardStyle()

  let value: string | undefined
  if (status == "stop") value = " Password Protected"
  if (status == "construction") value = "In Progress"
  if (status == "externalLink") value = "External Link"

  return (
    <>
      <div className={classes.Status}>
        <div className={classes.MenuButton}>
          <div className={classes.Icon} style={{ marginRight: "8px" }}>
            <Icon name={status as CardStatusType} />
          </div>
          <div>
            <Font type='menu'>{value}</Font>
            <Underline button opacity={0} />
          </div>
        </div>
      </div>
    </>
  )
}

export default CardStatus
