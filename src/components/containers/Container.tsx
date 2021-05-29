import React from "react"
import ArrowDragScroll from "../../utils/signals/ArrowSignals"
import Verticaler from "../../utils/spacer/variations/Verticaler"
import ContainerStyle from "./Container-style"

type Drag = "three" | "four" | "five"

type ContainerType = {
  drag?: Drag
  height?: Boolean
  group?: Boolean
  big?: Boolean
  center?: Boolean
  left?: Boolean
}

/**
 * Welcome to @dnvt/Container!
 * 
 * TODO:
 * - Add conditional Prop types
 * - Question Heght props
 * 
 */
const Container: React.FC<ContainerType> = (props) => {
  const classes = ContainerStyle()
  const { children, height, big, center, drag, left, group } = props

  if (height) return heightContainer()
  if (big) return bigContainer()
  if (drag) return draggableContainer()
  if (group) return groupedCardContainer()

  return <div className={classes.Container}>{children}</div>

  ////////////////////////////////////////////////////////////////////////////////

  function heightContainer(): JSX.Element {
    return (
      <div className={classes.Container} style={{ height: "100%" }}>
        {children}
      </div>
    )
  }

  function bigContainer(): JSX.Element {
    return (
      <div className={classes.BigContainer}>
        <div className={center ? classes.flexCenter : classes.flexAround}>
          {children}
        </div>
      </div>
    )
  }

  function groupedCardContainer() {
    return (
      <div className={classes.Container}>
        <div className={left ? classes.GroupLeft : classes.GroupRight}>
          {props.children}
        </div>
      </div>)
  }

  function draggableContainer(): JSX.Element {
    let scrollNumber: string
    if (drag == "three") scrollNumber = classes.ScrollThree
    if (drag == "four") scrollNumber = classes.ScrollFour
    else scrollNumber = classes.ScrollFive

    return (
      <div className={classes.FullContainer}>
        <ArrowDragScroll big left />
        <div className={classes.DragContainer}>
          <div className={scrollNumber}>
            <div>
              <Verticaler width={64} />
            </div>
            {children}
            <div>
              <Verticaler width={64} />
            </div>
          </div>
        </div>
        <ArrowDragScroll big />
      </div>
    )
  }
}

export default Container

