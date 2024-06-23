import React, { useContext, useState } from 'react'
import { ThemeSwitchContainer, ThemeSwitch } from './styled'
import { ThemeContext } from '@/App'

const ThemeSwitcher = () => {
  const [isChecked, setIsChecked] = useState(false)
  const { changeTheme } = useContext(ThemeContext) || {}

  const toggleTheme = () => {
    setIsChecked(!isChecked)
    if (changeTheme) changeTheme()
  }

  return (
    <ThemeSwitchContainer>
      <ThemeSwitch isChecked={isChecked} onClick={toggleTheme} />
    </ThemeSwitchContainer>
  )
}

export default ThemeSwitcher
