import React, { useContext } from 'react'
import StateContext from './StateContext'
import Sun from './Sun'
import Moon from './Moon'

//☼☽🌝🌞

const DarkmodeSwitch = ({ changeTheme }) => {
  const { theme } = useContext(StateContext)

  const clickHandle = () =>
    theme === 'dark' ? changeTheme('light') : changeTheme('dark')

  return (
    <div className={`darkmode-switch ${theme}`} onClick={clickHandle}>
      {theme === 'light' ? <Moon /> : <Sun />}
    </div>
  )
}

export default DarkmodeSwitch
