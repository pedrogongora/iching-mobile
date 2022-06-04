import React, { useContext } from 'react'
import StateContext from './StateContext'
import VDots from './VDots'

const MenuButton = ({ onToggleMenu }) => {
  const { theme } = useContext(StateContext)
  return (
    <div className={`menu-button ${theme}`} onClick={onToggleMenu}>
      <VDots theme={theme} />
    </div>
  )
}

export default MenuButton
