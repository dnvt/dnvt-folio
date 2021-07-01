import React from "react"
import { useSpring, animated } from "react-spring"
import { useWindowSize } from "../../hooks/useWindowSize"
import Font from "./Font"
import FontimationStyle from "./Fontimation-style"

const calc = (x: number, y: number, window_w: number) => [x - window_w, y - window_w / 2]

const Fontimation: React.FC = ({ children }) => {
  const classes = FontimationStyle()
  const window = useWindowSize()

  const { trans1, trans2, trans3, trans4, trans5, trans6, trans7, trans8, trans9, trans10, trans11, trans12 } = getTranslate(window)

  const [props6, set6] = useSpring(() => getSpringProps(390, 90))
  const [props5, set5] = useSpring(() => getSpringProps(375, 105))
  const [props4, set4] = useSpring(() => getSpringProps(360, 120))
  const [props3, set3] = useSpring(() => getSpringProps(350, 130))
  const [props2, set2] = useSpring(() => getSpringProps(340, 140))
  const [props, set] = useSpring(() => getSpringProps(335, 145))

  if (window.width > 767) {
    return (
      <div
        className={classes.fontimation}
        onMouseMove={({ clientX: x, clientY: y }) =>
          set({ xy: calc(x, y, window.width) }) &&
          set2({ xy: calc(x, y, window.width) }) &&
          set3({ xy: calc(x, y, window.width) }) &&
          set4({ xy: calc(x, y, window.width) }) &&
          set5({ xy: calc(x, y, window.width) }) &&
          set6({ xy: calc(x, y, window.width) })
        }
      >
        <div className={classes.hideDiv}>
          <animated.div style={{ transform: props6.xy.to(trans1) }}>
            <Font type="hero">{children}</Font>
          </animated.div>
        </div>
        <div className={classes.hideDiv}>
          <animated.div style={{ transform: props5.xy.to(trans2) }}>
            <Font type="hero">{children}</Font>
          </animated.div>
        </div>
        <div className={classes.hideDiv}>
          <animated.div style={{ transform: props4.xy.to(trans3) }}>
            <Font type="hero">{children}</Font>
          </animated.div>
        </div>
        <div className={classes.hideDiv}>
          <animated.div style={{ transform: props3.xy.to(trans4) }}>
            <Font type="hero">{children}</Font>
          </animated.div>
        </div>
        <div className={classes.hideDiv}>
          <animated.div style={{ transform: props2.xy.to(trans5) }}>
            <Font type="hero">{children}</Font>
          </animated.div>
        </div>
        <div className={classes.hideDiv}>
          <animated.div style={{ transform: props.xy.to(trans6) }}>
            <Font type="hero">{children}</Font>
          </animated.div>
        </div>
        <div className={classes.hideDiv}>
          <animated.div style={{ transform: props.xy.to(trans7) }}>
            <Font type="hero">{children}</Font>
          </animated.div>
        </div>
        <div className={classes.hideDiv}>
          <animated.div style={{ transform: props2.xy.to(trans8) }}>
            <Font type="hero">{children}</Font>
          </animated.div>
        </div>
        <div className={classes.hideDiv}>
          <animated.div style={{ transform: props3.xy.to(trans9) }}>
            <Font type="hero">{children}</Font>
          </animated.div>
        </div>
        <div className={classes.hideDiv}>
          <animated.div style={{ transform: props4.xy.to(trans10) }}>
            <Font type="hero">{children}</Font>
          </animated.div>
        </div>

        <div className={classes.hideDiv}>
          <animated.div style={{ transform: props5.xy.to(trans11) }}>
            <Font type="hero">{children}</Font>
          </animated.div>
        </div>
        <div className={classes.hideDiv}>
          <animated.div style={{ transform: props6.xy.to(trans12) }}>
            <Font type="hero">{children}</Font>
          </animated.div>
        </div>
      </div>
    )
  }

  return null
}

export default Fontimation

//

function getTranslate(window: { width: number; height: number }) {
  const trans1 = (x: number, y: number) => translateLeft3d(x, y, window.width, 5.5)
  const trans2 = (x: number, y: number) => translateLeft3d(x, y, window.width, 4.5)
  const trans3 = (x: number, y: number) => translateLeft3d(x, y, window.width, 3.5)
  const trans4 = (x: number, y: number) => translateLeft3d(x, y, window.width, 2.5)
  const trans5 = (x: number, y: number) => translateLeft3d(x, y, window.width, 1.5)
  const trans6 = (x: number, y: number) => translateLeft3d(x, y, window.width, 0.5)
  const trans7 = (x: number, y: number) => translateRight3d(x, y, window.width, 0.5)
  const trans8 = (x: number, y: number) => translateRight3d(x, y, window.width, 1.5)
  const trans9 = (x: number, y: number) => translateRight3d(x, y, window.width, 2.5)
  const trans10 = (x: number, y: number) => translateRight3d(x, y, window.width, 3.5)
  const trans11 = (x: number, y: number) => translateRight3d(x, y, window.width, 4.5)
  const trans12 = (x: number, y: number) => translateRight3d(x, y, window.width, 5.5)
  //
  return { trans1, trans2, trans3, trans4, trans5, trans6, trans7, trans8, trans9, trans10, trans11, trans12 }
}

function translateLeft3d(x: number, y: number, window_w: number, velocity: number) {
  return `translate3d(${ -x * 1.7 - window_w * 0.85 + (window_w * velocity) / 12 }px,${ -y / 8 }px,0)`
}

function translateRight3d(x: number, y: number, window_w: number, velocity: number) {
  return `translate3d(${ -x * 1.7 - window_w * 0.85 - (window_w * velocity) / 12 }px,${ -y / 8 }px,0)`
}

function getSpringProps(tension: number, friction: number) {
  return {
    xy: [0, 0],
    config: { mass: 25, tension: tension, friction: friction },
  }
}

export function compensateFontimationHeight(window: { width: number }) {
  if (window.width > 1359) return -1360
  if (window.width > 767) return -960
  return 0
}