import React from "react"
import { useSpring, animated } from "react-spring"
import Font from "./Font"
import FontimationStyle from "./Fontimation-style"


const calc = (x: number, y: number) => [
  x - window.innerWidth,
  y - window.innerHeight / 2,
]
const trans1 = (x: number, y: number) =>
  `translate3d(${ -x * 1.7 - window.innerWidth * 0.85 + (window.innerWidth * 5.5) / 12
  }px,${ -y / 8 }px,0)`
const trans2 = (x: number, y: number) =>
  `translate3d(${ -x * 1.7 - window.innerWidth * 0.85 + (window.innerWidth * 4.5) / 12
  }px,${ -y / 8 }px,0)`
const trans3 = (x: number, y: number) =>
  `translate3d(${ -x * 1.7 - window.innerWidth * 0.85 + (window.innerWidth * 3.5) / 12
  }px,${ -y / 8 }px,0)`
const trans4 = (x: number, y: number) =>
  `translate3d(${ -x * 1.7 - window.innerWidth * 0.85 + (window.innerWidth * 2.5) / 12
  }px,${ -y / 8 }px,0)`
const trans5 = (x: number, y: number) =>
  `translate3d(${ -x * 1.7 - window.innerWidth * 0.85 + (window.innerWidth * 1.5) / 12
  }px,${ -y / 8 }px,0)`
const trans6 = (x: number, y: number) =>
  `translate3d(${ -x * 1.7 - window.innerWidth * 0.85 + (window.innerWidth * 0.5) / 12
  }px,${ -y / 8 }px,0)`
const trans7 = (x: number, y: number) =>
  `translate3d(${ -x * 1.7 - window.innerWidth * 0.85 - (window.innerWidth * 0.5) / 12
  }px,${ -y / 8 }px,0)`
const trans8 = (x: number, y: number) =>
  `translate3d(${ -x * 1.7 - window.innerWidth * 0.85 - (window.innerWidth * 1.5) / 12
  }px,${ -y / 8 }px,0)`
const trans9 = (x: number, y: number) =>
  `translate3d(${ -x * 1.7 - window.innerWidth * 0.85 - (window.innerWidth * 2.5) / 12
  }px,${ -y / 8 }px,0)`
const trans10 = (x: number, y: number) =>
  `translate3d(${ -x * 1.7 - window.innerWidth * 0.85 - (window.innerWidth * 3.5) / 12
  }px,${ -y / 8 }px,0)`
const trans11 = (x: number, y: number) =>
  `translate3d(${ -x * 1.7 - window.innerWidth * 0.85 - (window.innerWidth * 4.5) / 12
  }px,${ -y / 8 }px,0)`
const trans12 = (x: number, y: number) =>
  `translate3d(${ -x * 1.7 - window.innerWidth * 0.85 - (window.innerWidth * 5.5) / 12
  }px,${ -y / 8 }px,0)`

const Fontimation: React.FC = ({ children }) => {
  const classes = FontimationStyle()

  const [props6, set6] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 25, tension: 380, friction: 100 },
  }))
  const [props5, set5] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 25, tension: 370, friction: 110 },
  }))
  const [props4, set4] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 25, tension: 360, friction: 120 },
  }))
  const [props3, set3] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 25, tension: 350, friction: 130 },
  }))
  const [props2, set2] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 25, tension: 340, friction: 140 },
  }))
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 25, tension: 335, friction: 145 },
  }))

  return (
    <div
      className={classes.fontimation}
      onMouseMove={({ clientX: x, clientY: y }) =>
        set({ xy: calc(x, y) }) &&
        set2({ xy: calc(x, y) }) &&
        set3({ xy: calc(x, y) }) &&
        set4({ xy: calc(x, y) }) &&
        set5({ xy: calc(x, y) }) &&
        set6({ xy: calc(x, y) })
      }
    >
      <div className={classes.hideDiv}>
        <animated.div style={{ transform: props6.xy.interpolate(trans1) }}>
          <Font type="hero">{children}</Font>
        </animated.div>
      </div>
      <div className={classes.hideDiv}>
        <animated.div style={{ transform: props5.xy.interpolate(trans2) }}>
          <Font type="hero">{children}</Font>
        </animated.div>
      </div>
      <div className={classes.hideDiv}>
        <animated.div style={{ transform: props4.xy.interpolate(trans3) }}>
          <Font type="hero">{children}</Font>
        </animated.div>
      </div>
      <div className={classes.hideDiv}>
        <animated.div style={{ transform: props3.xy.interpolate(trans4) }}>
          <Font type="hero">{children}</Font>
        </animated.div>
      </div>
      <div className={classes.hideDiv}>
        <animated.div style={{ transform: props2.xy.interpolate(trans5) }}>
          <Font type="hero">{children}</Font>
        </animated.div>
      </div>
      <div className={classes.hideDiv}>
        <animated.div style={{ transform: props.xy.interpolate(trans6) }}>
          <Font type="hero">{children}</Font>
        </animated.div>
      </div>
      <div className={classes.hideDiv}>
        <animated.div style={{ transform: props.xy.interpolate(trans7) }}>
          <Font type="hero">{children}</Font>
        </animated.div>
      </div>
      <div className={classes.hideDiv}>
        <animated.div style={{ transform: props2.xy.interpolate(trans8) }}>
          <Font type="hero">{children}</Font>
        </animated.div>
      </div>
      <div className={classes.hideDiv}>
        <animated.div style={{ transform: props3.xy.interpolate(trans9) }}>
          <Font type="hero">{children}</Font>
        </animated.div>
      </div>
      <div className={classes.hideDiv}>
        <animated.div style={{ transform: props4.xy.interpolate(trans10) }}>
          <Font type="hero">{children}</Font>
        </animated.div>
      </div>

      <div className={classes.hideDiv}>
        <animated.div style={{ transform: props5.xy.interpolate(trans11) }}>
          <Font type="hero">{children}</Font>
        </animated.div>
      </div>
      <div className={classes.hideDiv}>
        <animated.div style={{ transform: props6.xy.interpolate(trans12) }}>
          <Font type="hero">{children}</Font>
        </animated.div>
      </div>
    </div>
  )
}

export default Fontimation