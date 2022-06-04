import React, { useContext } from 'react'
import { animated, useSpring } from 'react-spring'
import StateContext from './StateContext'
import DarkmodeSwitch from './DarkmodeSwitch'

const Menu = ({ changeTheme }) => {
  const { theme, visibleMenu } = useContext(StateContext)
  const visible = visibleMenu ? 'visible' : ''

  // animate mount
  /* const animProps = useSpring({
    from: { width: '1.3rem', height: '1.3rem' },
    to: { width: 'calc(100% - 2.6rem)', height: 'calc(100% - 2.6rem)' },
    config: { tension: 300 },
  }) */

  return (
    <div className={`menu ${visible} ${theme}`}>
      <div className="menu-content">
        <DarkmodeSwitch changeTheme={changeTheme} />
        <ul>
          <li>
            <button>Bitácora</button>
          </li>
          <li>
            <button>Hexagramas</button>
          </li>
          <li>
            <button>Acerca de</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu
