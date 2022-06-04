import React, { useContext } from 'react'
import { animated, useSpring } from 'react-spring'
import { mutate, name, text, number } from '../../api/hexagrams'
import Hexagram from './Hexagram'
import StateContext from './StateContext'

const Title = ({ number }) => <h3>{`${number}. ${name(number)}`}</h3>

const Paragraph = ({ text }) => <pre>{text}</pre>

const Section = ({ text }) => (
  <pre style={{ margin: '1rem 0 .5rem 0' }}>{text}</pre>
)

const Cite = ({ text }) => (
  <pre style={{ margin: '0 0 1rem 2rem' }}>{`${text}`}</pre>
)

const isShort = (s) => s.length < 100

const isAllCaps = (s) =>
  s
    .split('')
    .map((p) => p.toUpperCase() === p)
    .reduce((a, v) => a && v)

const Text = ({ number }) => (
  <>
    {text(number)
      .split('\n\n')
      .map((s, i) => {
        if (isShort(s)) {
          if (isAllCaps(s)) {
            return <Section key={`paragraph-${i}`} text={s} />
          } else {
            return <Cite key={`paragraph-${i}`} text={s} />
          }
        } else {
          return <Paragraph key={`paragraph-${i}`} text={s} />
        }
      })}
  </>
)

const ResultPanel = () => {
  const { hexagram } = useContext(StateContext)
  const animProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 300 },
  })

  const hexagram2 = mutate(hexagram)
  const hexNum1 = number(hexagram)
  const hexNum2 = number(hexagram2)

  return (
    <animated.div className="result" style={animProps}>
      <Title number={hexNum1} />
      <Hexagram lines={hexagram} />
      <Text number={hexNum1} />
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      {hexNum1 !== hexNum2 && (
        <>
          <Title number={hexNum2} />
          <Hexagram lines={hexagram2} />
          <Text number={hexNum2} />
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </>
      )}
    </animated.div>
  )
}

export default ResultPanel
