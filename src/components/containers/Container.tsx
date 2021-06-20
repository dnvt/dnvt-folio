import React from "react"
import { useWindowSize } from "../../hooks/useWindowSize"
import ArrowDragScroll from "../../utils/signals/ArrowSignals"
import Verticaler from "../../utils/spacer/variations/Verticaler"
import ContainerStyle from "./Container-style"

type Drag = "three" | "four" | "five"

type ContainerType = {
  center?: Boolean
  drag?: Drag
  left?: Boolean
  type?: "group" | "big" | "height" | "footer"
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
  const window = useWindowSize()
  const { children, type, center, left, drag } = props

  if (type == "height") return heightContainer()
  if (type == "big") return bigContainer()
  if (type == "group") return groupedCardContainer()
  if (type == "footer") return footerCardContainer()
  if (drag) return draggableContainer()

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

  function footerCardContainer() {
    if (window.width < 991) {
      return (
        <div className={classes.FullContainer}>
          <ArrowDragScroll big left />
          <div className={classes.DragContainer}>
            <div className={classes.ScrollThree}>
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
    return (
      <div className={classes.Container}>
        <div className={classes.FooterCards}>{children}</div>
      </div>
    )
  }

  function draggableContainer(): JSX.Element {
    let scrollNumber
    if (drag == "three") scrollNumber = classes.ScrollThree
    if (drag == "four") scrollNumber = classes.ScrollFour
    if (drag == "five") scrollNumber = classes.ScrollFive

    return (
      <div className={classes.FullContainer} style={{ zIndex: -1 }}>
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

