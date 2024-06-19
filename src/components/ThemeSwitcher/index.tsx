import React, { useState } from 'react'
import { ThemeSwitchContainer, ThemeSwitch } from './styled'

const ThemeSwitcher = () => {
  const [isChecked, setIsChecked] = useState(false)

  const toggleTheme = () => {
    setIsChecked(!isChecked)
  }
  return (
    <ThemeSwitchContainer>
      <ThemeSwitch isChecked={isChecked} onClick={toggleTheme} />
    </ThemeSwitchContainer>
  )
}

export default ThemeSwitcher
