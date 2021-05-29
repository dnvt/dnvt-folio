import React from "react"
import Button from "../../../ui/buttons/Button"
import CardStyle from "../card-style"

export type CardStatusType = "loading" | "link" | "stop" | "construction"


////////////////////////////////////////////////////////////////////////////////

const CardStatus: React.FC<{ status: CardStatusType }> = ({ status }) => {
  const classes = CardStyle()

  let value: string | undefined
  if (status == "link") value = "External link"
  if (status == "stop") value = " Password protected"
  if (status == "construction") value = "In Progress"

  return (
    <>
      <div className={classes.Status}>
        <Button icon={status}>{value}</Button>
      </div>
    </>
  )
}

export default CardStatus
